"use client";
// @Mui
import { Box, useMediaQuery } from "@mui/material";
// sections
import HeroBanner from "@/sections/homePage/HeroBanner";
import AboutUs from "@/sections/homePage/AboutUs";
import Services from "@/sections/homePage/Services";
import Transformations from "@/sections/homePage/Transformations";
import Packages from "@/sections/homePage/Packages";
import Reviews from "@/sections/homePage/Reviews";

// ----------------------------------------------------------------

export default function Home() {
  const isMd = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <Box>
      <HeroBanner />
      <Box
        sx={{
          position: "relative",
          background: "linear-gradient(to bottom, #036292, #293F56)",
          py: { xs: 8, md: 12 },
          height: isMd ? "140vh" : "180vh",
        }}
      >
        <AboutUs />
        <Box
          sx={{
            position: "absolute",
            top: "73%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
          }}
        >
          <Services />
        </Box>
      </Box>
      <Transformations />
      <Box
        sx={{
          background: "linear-gradient(to bottom, #036292, #293F56)",
          pb: 10,
        }}
      >
        <Packages />
        <Reviews />
      </Box>
    </Box>
  );
}
