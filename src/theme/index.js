"use client";
import { useEffect, useMemo } from "react";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";

// theme configs
import palette from "./palette";
import typography from "./typography";
import breakpoints from "./breakpoints";
import componentsOverride from "./overrides";
import shadows, { customShadows } from "./shadows";

// zustand store
import useThemeModeStore from "@/stores/themeStore";

// ---------------------------------------------------------------------------------------------

function ThemeProvider({ children }) {
  const { mode, direction } = useThemeModeStore();

  const themeOptions = useMemo(
    () => ({
      palette: mode === "light" ? palette.light : palette.dark,
      typography,
      breakpoints,
      shape: { borderRadius: 8 },
      direction,
      shadows: mode === "light" ? shadows.light : shadows.dark,
      customShadows:
        mode === "light" ? customShadows.light : customShadows.dark,
    }),
    [mode, direction]
  );

  const theme = useMemo(() => {
    const newTheme = createTheme(themeOptions);
    newTheme.components = componentsOverride(newTheme, mode, direction);
    return newTheme;
  }, [themeOptions, mode, direction]);

  useEffect(() => {
    document.documentElement.dir = direction;
  }, [direction]);

  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
}

export default ThemeProvider;
