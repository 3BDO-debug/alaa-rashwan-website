"use client";

import Link from "next/link";
import Image from "next/image";
import { use, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/hooks/use-language";
import { useRouter } from "next/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const { push } = useRouter();

  return (
    <nav className="bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="Coach Alaa Rashwan Logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <span className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                Coach Alaa Rashwan
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            <div className="flex items-center space-x-8">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
              >
                {t("nav.home")}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/about"
                className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
              >
                {t("nav.about")}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/pricing"
                className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
              >
                {t("nav.pricing")}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
              >
                {t("nav.contact")}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <LanguageToggle />
              <ThemeToggle />
              <Button
                onClick={() => {
                  push("/pricing");
                }}
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-primary/20"
              >
                {t("nav.subscribe")}
              </Button>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary p-2 rounded-lg hover:bg-primary/10 transition-all duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-border/50">
            <div className="px-2 pt-4 pb-6 space-y-2 bg-card/50 backdrop-blur-sm rounded-b-lg">
              <Link
                href="/"
                className="block px-4 py-3 text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
              >
                {t("nav.home")}
              </Link>
              <Link
                href="/about"
                className="block px-4 py-3 text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
              >
                {t("nav.about")}
              </Link>
              <Link
                href="/pricing"
                className="block px-4 py-3 text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
              >
                {t("nav.pricing")}
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-3 text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
              >
                {t("nav.contact")}
              </Link>
              <div className="px-4 py-3">
                <Button
                  onClick={() => {
                    push("/pricing");
                  }}
                  className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-bold py-3 rounded-full shadow-lg"
                >
                  {t("nav.subscribe")}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
