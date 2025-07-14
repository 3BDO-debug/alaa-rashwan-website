"use client";
import localFont from "next/font/local";
import { CssBaseline, createTheme } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import ThemeProvider from "@/theme";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Alert from "@/components/Alert";

import "../locales/i18n";

const metadata = {
  title: "Coach Alaa Rashwan",
  description: "Alaa Rashwan | Powered By B.O.T",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider>
            <CssBaseline />
            <Header />
            {children}
            <Alert />
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
