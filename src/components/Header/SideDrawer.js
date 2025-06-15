import React from "react";
// framer-motion
import { motion } from "framer-motion";
// @Mui
import { Box, Container, Drawer, Stack, useTheme } from "@mui/material";
//
import HeaderLink from "./HeaderLink";
import Iconify from "../Iconify";

// -----------------------------------------------------------------------------------

function SideDrawer({ isTriggered, closeHandler, links }) {
  const theme = useTheme();

  const bubbleVariants = {
    hover: {
      scale: 1.2,
      opacity: 0.8,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
    tap: {
      scale: 1.8,
      opacity: 0.6,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
    initial: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  };

  return (
    <Drawer anchor="left" open={isTriggered} onClose={closeHandler}>
      <Stack sx={{ py: 3, px: 4, flex: 1 }}>
        <Box>
          {/* Social links */}
          {/* <Stack direction="row" alignItems="center" gap={2} sx={{ mt: 5 }}>
            <Box
              onClick={() => {
                window.open("https://www.instagram.com/dr_shrouk_ali/");
              }}
              component={motion.div}
              variants={bubbleVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              sx={{ cursor: "pointer" }}
            >
              <Iconify
                icon="skill-icons:instagram"
                sx={{ width: 25, height: 25, color: theme.palette.grey[600] }}
              />
            </Box>
            <Box
              onClick={() => {
                window.open("https://www.facebook.com/DrShroukAli/");
              }}
              component={motion.div}
              variants={bubbleVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              sx={{ cursor: "pointer" }}
            >
              <Iconify
                icon="logos:facebook"
                sx={{ width: 25, height: 25, color: theme.palette.grey[600] }}
              />
            </Box>
            <Box
              onClick={() => {
                window.open(
                  "https://www.tiktok.com/@dr_shrouk_ali?_t=8pHkI45ew8g&_r=1"
                );
              }}
              component={motion.div}
              variants={bubbleVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              sx={{ cursor: "pointer" }}
            >
              <Iconify
                icon="logos:tiktok-icon"
                sx={{ width: 25, height: 25, color: theme.palette.grey[600] }}
              />
            </Box>
          </Stack> */}
          <Stack gap={2} sx={{ mt: 5 }}>
            {links.map((link, index) => (
              <HeaderLink data={link} key={index} />
            ))}
          </Stack>
        </Box>
      </Stack>
    </Drawer>
  );
}

export default SideDrawer;
