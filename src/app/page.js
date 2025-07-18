"use client";
import { useRef } from "react";
// next
import Image from "next/image";
// @Mui
import { Box, useMediaQuery } from "@mui/material";
// framer-motion
import { motion } from "framer-motion";
// sections
import HeroBanner from "@/sections/homePage/HeroBanner";
import AboutUs from "@/sections/homePage/AboutUs";
import Services from "@/sections/homePage/Services";
import Transformations from "@/sections/homePage/Transformations";
import Packages from "@/sections/homePage/Packages";
import Reviews from "@/sections/homePage/Reviews";
import SubscribeNowPopUp from "@/components/SubscribeNowPopUp";
// assets
import dummbel from "@/assets/dummbel.png";

// ----------------------------------------------------------------

export default function Home() {
  const isMd = useMediaQuery((theme) => theme.breakpoints.up("md"));

  const packagesRef = useRef(null);

  const scrollToPackages = () => {
    if (packagesRef.current) {
      packagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const revealVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <Box>
      <HeroBanner onScrollToPackages={scrollToPackages} />
      <Box
        sx={{
          position: "relative",
          background: "linear-gradient(to bottom, #036292, #293F56)",
          py: { xs: 8, md: 12 },
          height: isMd ? "140vh" : "200vh",
        }}
      >
        <motion.div
          variants={revealVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <AboutUs />
        </motion.div>
        <Box
          sx={{
            position: "absolute",
            top: "75%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
          }}
        >
          <motion.div
            variants={revealVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <Services />
          </motion.div>
        </Box>
      </Box>
      <motion.div
        variants={revealVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <Transformations />
      </motion.div>
      <Box
        sx={{
          background: "linear-gradient(to bottom, #036292, #293F56)",
          pb: 10,
        }}
      >
        <motion.div
          ref={packagesRef}
          variants={revealVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          style={{ position: "relative" }} // Ensure the parent has a position
        >
          <Box
            component={Image}
            src={dummbel}
            alt="Dumbbell Background"
            sx={{
              position: "absolute",
              top: 150,
              left: 0,
              width: 1000,
              height: "auto",
              opacity: 0.2,
            }}
          />
          <Packages />
        </motion.div>

        <motion.div
          variants={revealVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Reviews />
        </motion.div>
      </Box>
      <SubscribeNowPopUp />
    </Box>
  );
}
