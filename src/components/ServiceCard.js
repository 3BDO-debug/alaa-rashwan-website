"use client";
import React from "react";
// next
import Image from "next/image";
// mui
import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

function ServiceCard({ title, image, description }) {
  const isMd = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        border: 1,
        borderRadius: 3,
        borderColor: "grey.0",
        width: "90%",
        mx: 1,
      }}
    >
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          m: 1,
          height: isMd ? "60vh" : "30vh",
        }}
      >
        <CardContent>
          <Stack
            gap={isMd ? 5 : 1}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ height: "100%", textAlign: "center" }}
          >
            <Image src={image} width={isMd ? 100 : 60} />
            <Typography variant="h1" color="primary.main">
              {title}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ServiceCard;
