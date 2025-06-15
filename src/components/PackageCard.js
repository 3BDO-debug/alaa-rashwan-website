import React from "react";
// mui
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
// components
import Iconify from "./Iconify";

function PackageCard({ title, items }) {
  return (
    <Box
      sx={{
        border: 1,
        borderColor: "grey.0",
        borderRadius: 3,
        width: "100%",
        m: 1,
        height:"fit-content"
      }}
    >
      <Card sx={{ m: 1 }}>
        <CardContent>
          <Typography
            sx={{ mt: 2, textAlign: "center" }}
            color="#161E69"
            variant="h3"
          >
            {title}
          </Typography>
          <Divider
            sx={{
              bgcolor: "primary.main",
              height: 2,
              borderRadius: 100,
              my: 2,
            }}
          />
          <Stack spacing={2}>
            {items.map((item, index) => (
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                key={index}
              >
                <Iconify
                  icon="icon-park-solid:check-one"
                  color="primary.main"
                  sx={{ fontSize: 30 }}
                />
                <Typography variant="h6">{item}</Typography>
              </Stack>
            ))}
          </Stack>

          <Divider
            sx={{
              bgcolor: "primary.main",
              height: 2,
              borderRadius: 100,
              my: 2,
            }}
          />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" size="large" sx={{ borderRadius: 10 }}>
              Subscribe now
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default PackageCard;
