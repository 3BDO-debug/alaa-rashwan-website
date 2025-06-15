"use client";
import React, { useState } from "react";
// next
import Link from "next/link";
import { usePathname } from "next/navigation";
// framer-motion
import { motion } from "framer-motion";
// @Mui
import { Box, Typography, useTheme } from "@mui/material";

// ---------------------------------------------------------------------------------

function HeaderLink({ data, index }) {
  const theme = useTheme();

  const pathname = usePathname();

  const [linkHovered, setLinkIsHovered] = useState(null);

  const { href, label } = data;

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", gap: 0.7 }}
      onMouseEnter={() => setLinkIsHovered(index)}
      onMouseLeave={() => setLinkIsHovered(null)}
    >
      {/* Header Indicator */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: pathname === href || linkHovered === index ? 1 : 0,
          scale: pathname === href || linkHovered === index ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
        sx={{
          borderRadius: "99%",
          backgroundColor:
            pathname === href
              ? theme.palette.primary.main
              : theme.palette.grey[500],
          width: 5,
          height: 5,
        }}
      />
      <Typography
        variant="subtitle2"
        component={Link}
        href={href}
        sx={{
          textDecoration: "none",
          color:
            pathname === href
              ? theme.palette.primary.main
              : linkHovered === index
              ? theme.palette.grey[500]
              : theme.palette.grey[700],
          transition: "all 0.3s ease-in-out",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

export default HeaderLink;
