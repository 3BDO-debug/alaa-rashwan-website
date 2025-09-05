"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

const NAVBAR_OFFSET = 80;

// Fixed deadline: September 21, 2025, 12:00 AM Cairo time (UTC+3)
const DEADLINE = new Date("2025-09-21T00:00:00+03:00").getTime();

export function FloatingPricingCTA({ userIpRegion }) {
  const [hidden, setHidden] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [timeLeft, setTimeLeft] = useState(DEADLINE - Date.now());

  const { t, language } = useLanguage();

  // Countdown logic
  useEffect(() => {
    const interval = setInterval(() => {
      const diff = DEADLINE - Date.now();
      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft(0);
      } else {
        setTimeLeft(diff);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  // Hide when pricing section visible
  useEffect(() => {
    const pricing = document.getElementById("pricing");
    if (!pricing) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.2 }
    );

    observer.observe(pricing);
    return () => observer.disconnect();
  }, []);

  const scrollToPricing = () => {
    const el = document.getElementById("pricing");
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  if (dismissed) return null; // completely hide if dismissed

  return (
    <div
      className={[
        "fixed right-4 top-1/2 -translate-y-1/2 z-50",
        "transition-opacity duration-300",
        hidden ? "opacity-0 pointer-events-none" : "opacity-100",
      ].join(" ")}
    >
      <Card className="relative shadow-xl border-primary/30 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        {/* Close button */}
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-2 right-2 rounded-full p-1 text-muted-foreground hover:bg-muted"
        >
          <X className="h-4 w-4" />
        </button>

        <CardContent className="p-4 space-y-3">
          <div className="text-sm font-semibold text-primary">
            🎉 {t("floating.title")}
          </div>
          <div className="text-base font-bold">
            {t("floating.subtitle")}{" "}
            <span className="text-green-600">
              {userIpRegion === "EG" ? "600 EGP" : "12 USD"}
            </span>
          </div>
          <div className="text-xs text-muted-foreground">
            {t("floating.offerEnds")}
          </div>
          <div className="font-mono text-sm flex gap-2">
            <span>{days}d</span>:<span>{hours}h</span>:<span>{minutes}m</span>:
            <span>{seconds}s</span>
          </div>
          <div className="text-xs text-muted-foreground italic">
            {t("floating.goal")}
          </div>
          <Button onClick={scrollToPricing} className="w-full">
            {t("floating.cta")}{" "}
            {language === "en" ? (
              <ArrowRight className="ml-2 h-4 w-4" />
            ) : (
              <ArrowLeft className="ml-2 h-4 w-4" />
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
