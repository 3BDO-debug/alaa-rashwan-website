"use client";
import React from "react";
import Slider from "react-slick";
import { Box, Container } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import t1 from "@/assets/transformations/t1.jpg";
import t2 from "@/assets/transformations/t2.jpg";
import t3 from "@/assets/transformations/t3.jpg";
import t4 from "@/assets/transformations/t4.jpg";
import t5 from "@/assets/transformations/t5.jpg";
import t6 from "@/assets/transformations/t6.jpg";

const images = [t1, t2, t3, t4, t5, t6];

function TransformationsSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
        py: 3,
        backgroundColor: "#fff",
        overflow: "hidden",
        borderRadius: 1,
      }}
    >
      <Container maxWidth="lg">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <Box key={idx} sx={{ px: 0.5 }}>
              <Box
                component="img"
                src={img.src}
                alt={`Transformation ${idx + 1}`}
                sx={{
                  width: "100%",
                  height: 80,
                  objectFit: "cover",
                  borderRadius: 0.5,
                }}
              />
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
}

export default TransformationsSlider;
