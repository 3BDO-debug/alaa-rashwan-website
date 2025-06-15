"use client";
import React from "react";
// mui
import { Box, useMediaQuery } from "@mui/material";

function HeroBanner() {
  const isMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
}

export default HeroBanner;
