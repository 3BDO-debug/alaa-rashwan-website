// @mui
import { enUS, arSD } from "@mui/material/locale";

// SETTINGS
// Please remove `localStorage` when you change settings.
// ----------------------------------------------------------------------

export const cookiesExpires = 3;

export const cookiesKey = {
  themeMode: "themeMode",
  themeDirection: "themeDirection",
};

export const defaultSettings = {
  themeMode: "light",
  themeDirection: "ltr",
};

// MULTI LANGUAGES
// Please remove `localStorage` when you change settings.
// ----------------------------------------------------------------------

export const allLangs = [
  {
    label: "English",
    value: "en",
    systemValue: enUS,
    icon: "/icons/ic_flag_en.svg",
  },
  {
    label: "Arabic (Egypt)",
    value: "ar",
    systemValue: arSD,
    icon: "/icons/ic_flag_sa.svg",
  },
];

export const defaultLang = allLangs[1]; // arabic
