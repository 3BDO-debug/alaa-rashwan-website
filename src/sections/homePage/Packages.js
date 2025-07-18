"use client";
import React, { useCallback, useEffect, useState } from "react";
// mui
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
  ButtonBase,
} from "@mui/material";
// components
import PackageCard from "@/components/PackageCard";
// hooks
import useLocales from "@/hooks/useLocales";
// __apis__
import { userIpRegionFetcher } from "@/__apis__/userIpRegion";

function Packages() {
  const { translate } = useLocales();

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [duration, setDuration] = useState(3);

  const [userIpRegion, setUserIpRegion] = useState("");

  const fetchUserIpRegion = useCallback(async () => {
    userIpRegionFetcher()
      .then((response) => {
        setUserIpRegion(response.country);
      })
      .catch((error) => {
        console.log("Error fetching user region", error);
        setUserIpRegion(null);
      });
  }, [setUserIpRegion]);

  useEffect(() => {
    fetchUserIpRegion();
  }, []);

  const packages = [
    {
      value: "plan1",
      title: translate(
        "pagesTranslations.homePageTranslations.packages.plan1.title"
      ),
      subtitle: translate(
        "pagesTranslations.homePageTranslations.packages.plan1.subtitle"
      ),
      items: [
        translate("pagesTranslations.homePageTranslations.packages.plan1.1"),
        translate("pagesTranslations.homePageTranslations.packages.plan1.2"),
        translate("pagesTranslations.homePageTranslations.packages.plan1.3"),
        translate("pagesTranslations.homePageTranslations.packages.plan1.4"),
      ],
      prices: {
        1: { egp: 400, usd: 20 },
        3: { egp: 700, usd: 35 },
        6: { egp: 1200, usd: 60 },
        12: { egp: 2400, usd: 120 },
      },
      yearFreeMonths: 2,
    },
    {
      value: "plan2",
      title: translate(
        "pagesTranslations.homePageTranslations.packages.plan2.title"
      ),
      subtitle: translate(
        "pagesTranslations.homePageTranslations.packages.plan2.subtitle"
      ),
      items: [
        translate("pagesTranslations.homePageTranslations.packages.plan2.1"),
        translate("pagesTranslations.homePageTranslations.packages.plan2.2"),
        translate("pagesTranslations.homePageTranslations.packages.plan2.3"),
        translate("pagesTranslations.homePageTranslations.packages.plan2.4"),
      ],
      prices: {
        1: { egp: 500, usd: 25 },
        3: { egp: 1000, usd: 50 },
        6: { egp: 1400, usd: 70 },
        12: { egp: 2600, usd: 130 },
      },
      yearFreeMonths: 3,
    },
    {
      value: "plan3",
      title: translate(
        "pagesTranslations.homePageTranslations.packages.plan3.title"
      ),
      subtitle: translate(
        "pagesTranslations.homePageTranslations.packages.plan3.subtitle"
      ),
      items: [
        translate("pagesTranslations.homePageTranslations.packages.plan3.1"),
        translate("pagesTranslations.homePageTranslations.packages.plan3.2"),
        translate("pagesTranslations.homePageTranslations.packages.plan3.3"),
      ],
      prices: {
        3: { egp: 700, usd: 35 },
        12: { egp: 2000, usd: 100 },
      },
      yearFreeMonths: 3,
    },
    {
      value: "plan4",
      title: translate(
        "pagesTranslations.homePageTranslations.packages.plan4.title"
      ),
      subtitle: translate(
        "pagesTranslations.homePageTranslations.packages.plan4.subtitle"
      ),
      items: [
        translate("pagesTranslations.homePageTranslations.packages.plan4.1"),
        translate("pagesTranslations.homePageTranslations.packages.plan4.2"),
        translate("pagesTranslations.homePageTranslations.packages.plan4.3"),
        translate("pagesTranslations.homePageTranslations.packages.plan4.4"),
      ],
      prices: {
        1: { egp: 700, usd: 35 },
        3: { egp: 1800, usd: 90 },
        6: { egp: 3000, usd: 150 },
        12: { egp: 6000, usd: 300 },
      },
      yearFreeMonths: 4,
    },
    {
      value: "plan5",
      title: translate(
        "pagesTranslations.homePageTranslations.packages.plan5.title"
      ),
      subtitle: translate(
        "pagesTranslations.homePageTranslations.packages.plan5.subtitle"
      ),
      items: [
        translate("pagesTranslations.homePageTranslations.packages.plan5.1"),
        translate("pagesTranslations.homePageTranslations.packages.plan5.2"),
        translate("pagesTranslations.homePageTranslations.packages.plan5.3"),
        translate("pagesTranslations.homePageTranslations.packages.plan5.4"),
        translate("pagesTranslations.homePageTranslations.packages.plan5.5"),
      ],
      prices: {
        3: { egp: 4000, usd: 200 },
        12: { egp: 12000, usd: 600 },
      },
      yearFreeMonths: 4,
    },
    {
      value: "plan6",
      title: translate(
        "pagesTranslations.homePageTranslations.packages.plan6.title"
      ),
      subtitle: translate(
        "pagesTranslations.homePageTranslations.packages.plan6.subtitle"
      ),
      items: [
        translate("pagesTranslations.homePageTranslations.packages.plan6.1"),
        translate("pagesTranslations.homePageTranslations.packages.plan6.2"),
        translate("pagesTranslations.homePageTranslations.packages.plan6.3"),
        translate("pagesTranslations.homePageTranslations.packages.plan6.4"),
      ],
      prices: {
        1: { egp: 250, usd: 13 },
        3: { egp: 400, usd: 20 },
        6: { egp: 600, usd: 30 },
        12: { egp: 1200, usd: 60 },
      },
      yearFreeMonths: 4,
      threeMonthsOffer: 1,
    },
  ];

  const durations = [
    {
      label: translate(
        "pagesTranslations.homePageTranslations.packages.tabs.1"
      ),
      value: 1,
    },
    {
      label: translate(
        "pagesTranslations.homePageTranslations.packages.tabs.3"
      ),
      value: 3,
    },
    {
      label: translate(
        "pagesTranslations.homePageTranslations.packages.tabs.6"
      ),
      value: 6,
    },
    {
      label: translate(
        "pagesTranslations.homePageTranslations.packages.tabs.12"
      ),
      value: 12,
    },
  ];
  return (
    <Box>
      <Container maxWidth="xl">
        <Stack alignItems="center" sx={{ py: 10 }}>
          <Typography
            variant="h1"
            color="grey.0"
            textAlign="center"
            sx={{ fontWeight: 500 }}
          >
            {translate(
              "pagesTranslations.homePageTranslations.packages.title1"
            )}
          </Typography>
          <Typography variant="h1" color="grey.0" textAlign="center">
            {translate(
              "pagesTranslations.homePageTranslations.packages.title2"
            )}
          </Typography>
        </Stack>
        <Grid container spacing={2}>
          <Grid size={12}>
            <Box
              display="grid"
              gridTemplateColumns={isMobile ? "1fr 1fr" : "repeat(4, auto)"}
              gap={1.5}
              justifyContent="center"
              alignItems="center"
              width="100%"
              sx={{ mb: 5 }}
            >
              {durations.map(({ label, value }) => (
                <ButtonBase
                  key={value}
                  onClick={() => setDuration(value)}
                  sx={{
                    px: 2,
                    py: 1.5,
                    borderRadius: 2,
                    textAlign: "center",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "#ffffff",
                    backgroundColor:
                      duration === value ? "primary.main" : "transparent",
                    "&:hover": {
                      backgroundColor: "#ffffff20",
                    },
                  }}
                >
                  {label}
                </ButtonBase>
              ))}
            </Box>
          </Grid>
          {packages
            .filter((item) => {
              // Hide plan3 and plan5 for duration 1 or 6
              if (
                (duration === 1 || duration === 6) &&
                (item.value === "plan3" || item.value === "plan5")
              ) {
                return false;
              }
              return true;
            })
            .map((item, idx) => (
              <Grid
                key={idx}
                size={{ xs: 12, md: 4 }}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <PackageCard
                  value={item.value}
                  title={item.title}
                  items={item.items}
                  subtitle={item.subtitle}
                  prices={item.prices}
                  yearFreeMonths={item.yearFreeMonths}
                  threeMonthsOffer={item.threeMonthsOffer}
                  region={userIpRegion}
                  duration={duration}
                />
              </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Packages;
