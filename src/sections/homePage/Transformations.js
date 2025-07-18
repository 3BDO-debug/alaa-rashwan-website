"use client";
import React from "react";
import Slider from "react-slick";
import {
  Box,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Images
import t1 from "@/assets/transformations/t1.jpg";
import t2 from "@/assets/transformations/t2.jpg";
import t3 from "@/assets/transformations/t3.jpg";
import t4 from "@/assets/transformations/t4.jpg";
import t5 from "@/assets/transformations/t5.jpg";
import t6 from "@/assets/transformations/t6.jpg";
// hook
import useLocales from "@/hooks/useLocales";

const transformations = [t1, t2, t3, t4, t5, t6];

function Transformations() {
  const theme = useTheme();

  const isMd = useMediaQuery((theme) => theme.breakpoints.up("md"));

  const { translate } = useLocales();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        py: 20,
        overflow: "hidden",
        background: "linear-gradient(to bottom, #50afe6, #2e6b9a)",
      }}
    >
      <Container maxWidth="xl" sx={{ px: 4 }}>
        <Stack alignItems="center" sx={{ mb: 5 }}>
          <Typography variant="h2" textAlign="center" color="grey.0">
            {translate(
              "pagesTranslations.homePageTranslations.transformation.title1"
            )}
          </Typography>
          <Typography variant="h2" textAlign="center" color="grey.0">
            {translate(
              "pagesTranslations.homePageTranslations.transformation.title2"
            )}
          </Typography>
        </Stack>
        <Slider {...settings}>
          {transformations.map((transformation, idx) => (
            <Box key={idx} sx={{ px: 0.5 }}>
              <Card sx={{ width: "100%" }}>
                <CardContent>
                  <Stack direction="row" alignItems="center">
                    <Box
                      component="img"
                      src={transformation.src}
                      alt={`Transformation ${idx + 1}`}
                      sx={{
                        width: "100%",
                        height: isMd ? 500 : 300,
                        objectFit: "cover",
                        borderRadius: 3,
                      }}
                    />
                    {/* <Box
                      component="img"
                      src={transformation.after.src}
                      alt={`Transformation ${idx + 1}`}
                      sx={{
                        width: "100%",
                        height: 280,
                        objectFit: "cover",
                        borderRadius: 3,
                      }}
                    /> */}
                  </Stack>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
}

export default Transformations;
