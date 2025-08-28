import type React from "react";
import type { Metadata } from "next";
import { Oswald, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/hooks/use-language";
import Alert from "@/components/Alert";
import SubscribeNowPopUp from "@/components/SubscribeNowPopUp";

const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Coach Alaa Rashwan - Transform Your Body",
  description:
    "Professional fitness coaching for everyday people who want to transform their bodies. Join Coach Alaa Rashwan for personalized training programs.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${robotoCondensed.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <LanguageProvider>
            <SubscribeNowPopUp />
            <Alert />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
