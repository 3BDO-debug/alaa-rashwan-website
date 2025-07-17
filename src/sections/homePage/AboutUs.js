"use client";
import React from "react";
// next
import Image from "next/image";
// mui
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
// assets
import alaaRashwan from "@/assets/alaaRashwan.png";
import dummbel from "@/assets/dummbel.png";
import TransformationsSlider from "@/components/TransformationsSlider";
import ServiceCard from "@/components/ServiceCard";
import useLocales from "@/hooks/useLocales";

function AboutUs() {
  const isMd = useMediaQuery((theme) => theme.breakpoints.up("md"));

  const { translate } = useLocales();

  return (
    <Box>
      <Box
        component={Image}
        src={dummbel}
        alt="Dumbbell Background"
        sx={{
          position: "absolute",
          top: 100,
          left: 0,
          width: 850,
          height: "auto",
          opacity: 0.05,
        }}
      />
      <Container maxWidth="xl">
        <Grid container alignItems="center" spacing={3}>
          {/* Left Section */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Box sx={{ width: 20, height: 400, bgcolor: "grey.0" }} />
              <Stack gap={2}>
                <Box>
                  <Typography variant="h2" color="common.white">
                    {translate(
                      "pagesTranslations.homePageTranslations.hook.title1"
                    )}
                  </Typography>
                  <Typography variant="h2" color="primary.main">
                    {translate(
                      "pagesTranslations.homePageTranslations.hook.title2"
                    )}
                  </Typography>
                </Box>
                <Typography
                  variant="h6"
                  color="grey.0"
                  sx={{ width: isMd ? "80%" : "100%" }}
                >
                  {translate(
                      "pagesTranslations.homePageTranslations.hook.subtitle"
                    )}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          {/* Right Section */}
          <Grid
            size={{ xs: 12, md: 8 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {isMd && (
              <Box
                sx={{
                  width: "40%",
                  position: "absolute",
                  left: "3%",
                  top: "5%",
                }}
              >
                <TransformationsSlider />
              </Box>
            )}
            <Box
              component="img"
              src={alaaRashwan.src}
              alt="Alaa Rashwan"
              sx={{ width: isMd ? "45%" : "100%", height: "auto" }}
            />
            <Box
              sx={{
                width: "40%",
                position: "absolute",
                right: 0,
                top: "70%",
              }}
            >
              <TransformationsSlider />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutUs;
