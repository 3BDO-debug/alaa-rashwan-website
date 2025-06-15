"use client";
import React from "react";
import Slider from "react-slick";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dummy reviews
const reviews = [
  {
    name: "John Doe",
    image: "",
    description: "Amazing transformation program! Helped me stay on track.",
  },
  {
    name: "Jane Smith",
    image: "",
    description: "The workouts are effective and easy to follow. Loved it!",
  },
  {
    name: "Ali Hassan",
    image: "",
    description: "Great nutrition advice and consistent follow-ups.",
  },
  {
    name: "Sara Ahmed",
    image: "",
    description: "Very motivating trainer and excellent support system.",
  },
  {
    name: "Chris Lee",
    image: "",
    description: "I saw real results in just a few weeks!",
  },
];

function Reviews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 10, p: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <Typography variant="h2" color="grey.0">
          Reviews
        </Typography>
      </Box>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <Box key={index} px={1}>
            <Card sx={{ borderRadius: 5, boxShadow: 10, height: "100%" }}>
              <CardContent>
                <Rating value={5} readOnly />
                <Stack direction="row" alignItems="center" gap={1} mt={2}>
                  <Avatar src={review.image} />
                  <Typography fontWeight={600}>{review.name}</Typography>
                  <Box
                    sx={{
                      bgcolor: "primary.main",
                      px: 1,
                      py: 0.5,
                      borderRadius: 2,
                      ml: 1,
                    }}
                  >
                    <Typography variant="body2" sx={{ color: "grey.0" }}>
                      Verified
                    </Typography>
                  </Box>
                </Stack>
                <Typography sx={{ mt: 2, ml: 0.5 }}>
                  {review.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Container>
  );
}

export default Reviews;
