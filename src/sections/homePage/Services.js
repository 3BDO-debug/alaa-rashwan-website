import React from "react";
// mui
import { Container, Grid, Typography } from "@mui/material";
// components
import ServiceCard from "@/components/ServiceCard";
// assets
import nutrition from "@/assets/nutrition.png";
import workout from "@/assets/workout.png";
import followUp from "@/assets/followUp.png";

function Services() {
  const cardsContent = [
    {
      title: "Nutrition Plan",
      image: nutrition,
      description:
        "A personalized nutrition plan tailored to your body type, goals, and lifestyle. Includes meal guidance, portion control, and flexible food choices to help you stay consistent and see real results.",
    },
    {
      title: "Workout Plan",
      image: workout,
      description:
        "A custom-tailored workout plan designed to match your fitness level and goals. Whether you're aiming to build muscle, burn fat, or improve overall strength, this plan evolves with your progress to keep you challenged and motivated.",
    },
    {
      title: "Follow Up",
      image: followUp,
      description:
        "Stay on track with regular check-ins, progress tracking, and personalized adjustments to your plan based on your evolving needs and feedback.",
    },
  ];

  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid
          size={{ xs: 12 }}
          sx={{ display: "flex", justifyContent: "center", pt: 15 }}
        >
          <Typography variant="h2" color="grey.0">
            Services
          </Typography>
        </Grid>
        {cardsContent.map((card, idx) => (
          <Grid
            key={idx}
            size={{ xs: 12, md: 4 }}
            sx={{ display: "flex", justifyContent: "center", mt: 5 }}
          >
            <ServiceCard
              title={card.title}
              image={card.image}
              description={card.description}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Services;
