"use client";
import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import heroBanner from "@/assets/heroBanner.png";

function HeroBanner() {
  const isMd = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        height: "90vh",
        width: "100%",
        overflow: "hidden",
        backgroundImage: `linear-gradient(to bottom, rgba(3, 98, 146, 0.7), rgba(41, 63, 86, 0.7)), url(${heroBanner.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ width: "fit-content" }}>
          <Typography variant="h2" color="grey.0" fontWeight="bold">
            REFRESH YOUR
          </Typography>
          <Typography variant="h2" color="grey.0" fontWeight="bold">
            ROUTINE SHAPE
          </Typography>
          <Typography variant="h2" color="grey.0" fontWeight="bold">
            YOUR FITNESS
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2, borderRadius: 5, width: "60%" }}
              fullWidth
              size="large"
            >
              Join now
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default HeroBanner;
