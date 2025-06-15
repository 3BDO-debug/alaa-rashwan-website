"use client";
import React from "react";
import Slider from "react-slick";
import { Box, Container, Stack, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import t1 from "@/assets/1.png";
import t2 from "@/assets/2.png";
import t3 from "@/assets/3.png";
import t4 from "@/assets/4.png";
import t5 from "@/assets/5.png";
import t6 from "@/assets/6.png";
import t7 from "@/assets/7.png";
import t8 from "@/assets/8.png";
import t9 from "@/assets/9.png";

const images = [t1, t2, t3, t4, t5, t6, t7, t8, t9];

function Transformations() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
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
            YOUR JOURNEY,
          </Typography>
          <Typography variant="h2" textAlign="center" color="grey.0">
            YOUR TRANSFORMATION
          </Typography>
        </Stack>
        <Slider {...settings}>
          {images.map((img, idx) => (
            <Box key={idx} sx={{ px: 0.5 }}>
              <Box
                component="img"
                src={img.src}
                alt={`Transformation ${idx + 1}`}
                sx={{
                  width: "100%",
                  height: 600,
                  objectFit: "cover",
                  borderRadius: 3,
                }}
              />
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
}

export default Transformations;
