import React from "react";
// mui
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
// components
import PackageCard from "@/components/PackageCard";

function Packages() {
  const packages = [
    {
      title: "3 Months package",
      items: [
        "Personalized nutrition plan",
        "Weekly check-ins",
        "Workout routine",
      ],
    },
    {
      title: "5 Months package",
      items: [
        "Customized meal plan",
        "Bi-weekly progress reports",
        "Home & gym workouts",
        "WhatsApp support",
      ],
    },
    {
      title: "12 Months package",
      items: [
        "Advanced nutrition and training cycles",
        "Monthly transformation tracking",
        "Supplement guidance",
        "1-on-1 coaching sessions",
        "Seasonal plan adjustments",
        "Priority support",
      ],
    },
  ];

  return (
    <Container maxWidth="xl">
      <Stack alignItems="center" sx={{ py: 10 }}>
        <Typography
          variant="h1"
          color="grey.0"
          textAlign="center"
          sx={{ fontWeight: 500 }}
        >
          CHOOSE THE PACKAGE
        </Typography>
        <Typography variant="h1" color="grey.0" textAlign="center">
          THAT SUITS YOU
        </Typography>
      </Stack>
      <Grid container>
        {packages.map((item, idx) => (
          <Grid
            key={idx}
            size={{ xs: 12, md: 4 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <PackageCard title={item.title} items={item.items} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Packages;
