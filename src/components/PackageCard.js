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
// hooks
import useLocales from "@/hooks/useLocales";
// stores
import useThemeModeStore from "@/stores/themeStore";
import useSubscribePopupStore from "@/stores/subscibePopUpStore";

function PackageCard({
  value,
  title,
  items,
  subtitle,
  prices,
  region,
  duration,
  yearFreeMonths,
  threeMonthsOffer,
}) {
  const { translate } = useLocales();

  const { mode } = useThemeModeStore();

  const currencyKey = region === "EG" ? "egp" : "usd";

  const { openPopup } = useSubscribePopupStore();

  return (
    <Box
      sx={{
        border: 1,
        borderColor: "grey.0",
        borderRadius: 3,
        width: "100%",
        m: 1,
        height: "fit-content",
      }}
    >
      <Card sx={{ m: 1 }}>
        <CardContent>
          <Typography
            sx={{ mt: 2, textAlign: "center" }}
            color={mode === "dark" ? "primary.main" : "#161E69"}
            variant="h3"
          >
            {title}
          </Typography>
          <Typography
            sx={{ mt: 0.5, textAlign: "center" }}
            color={mode === "dark" ? "primary.main" : "#161E69"}
            variant="subtitle1"
          >
            {subtitle}
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
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack>
              <Typography variant="h3">
                {prices?.[duration]?.[currencyKey]}{" "}
                {region === "EG" ? "EGP" : "USD"}
              </Typography>
              {yearFreeMonths && duration === 12 && (
                <Typography variant="subtitle1">
                  {" "}
                  + {yearFreeMonths}{" "}
                  {translate(
                    "pagesTranslations.homePageTranslations.packages.freeMonths"
                  )}
                </Typography>
              )}
              {threeMonthsOffer && duration === 3 && (
                <Typography variant="subtitle1">
                  {" "}
                  + {threeMonthsOffer}{" "}
                  {translate(
                    "pagesTranslations.homePageTranslations.packages.freeMonths"
                  )}
                </Typography>
              )}
            </Stack>
            <Button
              variant="contained"
              size="large"
              sx={{ borderRadius: 10 }}
              onClick={() => {
                openPopup({
                  isTriggered: true,
                  data: {
                    value,
                    title,
                    price: prices?.[duration]?.[currencyKey],
                    region,
                    duration,
                  },
                });
              }}
            >
              {translate(
                "pagesTranslations.homePageTranslations.packages.button"
              )}
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}

export default PackageCard;
