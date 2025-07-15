"use client";
import React from "react";
// next
import Image from "next/image";
// mui
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// iconify
import Iconify from "../Iconify";
// stores
import useThemeModeStore from "@/stores/themeStore";

function Footer() {
  const theme = useTheme();

  const { mode } = useThemeModeStore();

  const isMdOrLarger = useMediaQuery(theme.breakpoints.up("md"));

  const LEGAL_FOOTER_LINKS = [
    { title: "Terms & Conditions", href: "/terms-conditions" },
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Refund Policy", href: "/refund-policy" },
  ];

  return (
    <Box sx={{ mt: 5 }}>
      <Box sx={{ mx: 5 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: 50,
              fontWeight: 300,
            }}
          >
            Join Our Rediant Newsletter
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: 50,
            }}
          >
            And Get exclusive Offers
          </Typography>
          <TextField
            placeholder="Enter your email"
            variant="outlined"
            sx={{
              width: { xs: "100%", md: "35%" },
              mt: 2,
              bgcolor: "grey.0",
              borderRadius: 10,
              "& .MuiOutlinedInput-root": {
                borderRadius: 10,
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {isMdOrLarger ? (
                    <Button sx={{ borderRadius: 10 }} variant="contained">
                      Subscribe
                    </Button>
                  ) : (
                    <IconButton>
                      <Iconify
                        icon="iconamoon:send-fill"
                        color="primary.main"
                      />
                    </IconButton>
                  )}
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Grid
          container
          spacing={10}
          sx={{ mt: 10, display: "flex", justifyContent: "center" }}
        >
          <Grid item xs={12} md={5}>
            <Typography
              variant="h3"
              sx={{ textAlign: { xs: "center", md: "inherit" } }}
            >
              Alaa Rashwan
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                mt: 2,
                width: { xs: "100%", md: "50%" },
                textAlign: { xs: "center", md: "inherit" },
              }}
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euis- mod tincidunt ut laoreet dolore magna ali-
            </Typography>
          </Grid>
          <Grid item xs={12} md={3.5}>
            <Typography
              variant="h4"
              sx={{ textAlign: { xs: "center", md: "inherit" } }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                mt: 2,
                textAlign: { xs: "center", md: "inherit" },
              }}
            >
              alaashehata62@gmail.com
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                mt: 2,
                textAlign: { xs: "center", md: "inherit" },
              }}
            >
              01067085508
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                mt: 2,
                textAlign: { xs: "center", md: "inherit" },
              }}
            >
              محافظة الغربية
            </Typography>
          </Grid>
          <Grid item xs={12} md={3.5}>
            <Typography
              variant="h4"
              sx={{ textAlign: { xs: "center", md: "inherit" } }}
            >
              Legal
            </Typography>
            {LEGAL_FOOTER_LINKS.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                sx={{ textDecoration: "none" }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    mt: 2,
                    cursor: "pointer",
                    color: mode === "light" ? "grey.900" : "grey.0",
                    textAlign: { xs: "center", md: "inherit" },
                  }}
                >
                  {link.title}
                </Typography>
              </Link>
            ))}
          </Grid>
        </Grid>
      </Box>
      <Divider sx={{ bgcolor: "#939598", mt: 10 }} />
      {/* <Typography variant="subtitle1" sx={{ mx: 5, py: 3, fontWeight: "bold" }}>
        @ 2025 Alaa Rashwan. All rights reserved
      </Typography> */}
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography
          variant="subtitle1"
          sx={{ mx: 5, py: 3, fontFamily: "inter-regular", fontWeight: "bold" }}
        >
          @ 2025 Alaa Rashwan. All rights reserved
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ mx: 5, py: 3, fontFamily: "inter-regular", fontWeight: "bold" }}
        >
          Developed With All Love By{" "}
          <Link
            href="https://basedontech.com"
            underline="none"
            sx={{ color: "primary.main", fontWeight: "bold" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Based On Tech
          </Link>
        </Typography>
      </Stack>
    </Box>
  );
}

export default Footer;
