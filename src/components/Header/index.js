"use client";
import React, { useCallback, useState } from "react";
// next
import Image from "next/image";
import { useRouter } from "next/navigation";
// framer-motion
import { motion } from "framer-motion";
// stores
import useThemeModeStore from "@/stores/themeStore";
// @Mui
import {
  alpha,
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
// assets
// import logo from "@/assets/logo.png";
import Iconify from "../Iconify";
import SideDrawer from "./SideDrawer";
import HeaderLink from "./HeaderLink";
// import useLocales from "@/hooks/useLocales";

// -----------------------------------------------------------------

function Header() {
  const theme = useTheme();

  const { direction, mode, setThemeMode } = useThemeModeStore();

  // const { translate, currentLang, onChangeLang } = useLocales();

  const router = useRouter();
  const isMd = useMediaQuery((theme) => theme.breakpoints.up("md"));

  const HEADER_LINKS = [
    // {
    //   label: "Home",
    //   href: "/",
    // },
    // {
    //   label: "bout us",
    //   href: "/about-us",
    // },
    // {
    //   label: "packages",
    //   href: "/packages",
    // },
    // {
    //   label: "contact us",
    //   href: "/contact-us",
    // },
  ];

  const [sideDrawer, triggerSideDrawer] = useState(false);

  return (
    <Box sx={{ py: 2 }}>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Logo */}
          <Box
            onClick={() => router.push("/")}
            sx={{
              cursor: "pointer",
            }}
          >
            <Stack>
              <Box
                sx={{
                  position: "relative",
                  height: 35,
                }}
              >
                <Image
                  layout="fill"
                  // src={logo}
                  alt="Alaa Rashwan"
                  objectFit="contain"
                />
              </Box>
            </Stack>
          </Box>
          {/* Header Links */}
          <Stack
            sx={{ display: { xs: "none", md: "flex" } }}
            direction="row"
            gap={3}
            alignItems="center"
          >
            {HEADER_LINKS.map((link, index) => (
              <HeaderLink data={link} key={index} />
            ))}
          </Stack>
          {/* Socials & Menu Icon */}
          <Box>
            <Stack direction="row" alignItems="center" gap={2}>
              <Box>
                <IconButton
                  onClick={() =>
                    setThemeMode({
                      direction,
                      mode: mode === "light" ? "dark" : "light",
                    })
                  }
                >
                  <Iconify
                    sx={{
                      width: 30,
                      height: 30,
                      color: mode === "light" ? "grey.600" : "#FCE570",
                    }}
                    icon={
                      mode === "light"
                        ? "material-symbols-light:dark-mode"
                        : "si:light-mode-line"
                    }
                  />
                </IconButton>
                <IconButton
                // onClick={() =>
                //   onChangeLang(currentLang.value === "en" ? "ar" : "en")
                // }
                >
                  {/* <Iconify
                    icon="emojione-v1:flag-for-flag-saudi-arabia"
                    {
                      currentLang.value === "ar"
                        ? "twemoji:flag-united-kingdom"
                        : "emojione-v1:flag-for-flag-saudi-arabia"
                    }
                  /> */}
                </IconButton>
              </Box>
              <IconButton
                sx={{
                  display: {
                    xs: "flex",
                    md: "none",
                  },
                }}
                onClick={() => triggerSideDrawer(true)}
              >
                <Iconify icon="jam:menu" sx={{ width: 30, height: 30 }} />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Container>
      {/* Side drawer */}
      <SideDrawer
        isTriggered={sideDrawer}
        closeHandler={() => triggerSideDrawer(false)}
        links={HEADER_LINKS}
      />
    </Box>
  );
}

export default Header;
