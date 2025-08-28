"use client";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, ArrowRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
// __apis___
import { userIpRegionFetcher } from "@/__apis__/userIpRegion";
// stores
import useSubscribePopupStore from "@/stores/subscibePopUpStore";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function PricingPage() {
  const [userIpRegion, setUserIpRegion] = useState("");

  const fetchUserIpRegion = useCallback(async () => {
    userIpRegionFetcher()
      .then((response) => {
        setUserIpRegion(response.country);
      })
      .catch((error) => {
        console.log("Error fetching user region", error);
        setUserIpRegion("");
      });
  }, [setUserIpRegion]);

  useEffect(() => {
    fetchUserIpRegion();
  }, []);

  const currencyKey = userIpRegion === "EG" ? "egp" : "usd";

  //-------------------------------------------------
  const { t } = useLanguage();

  const [selectedDuration, setSelectedDuration] = useState(3);

  const { openPopup } = useSubscribePopupStore();

  const plans = [
    {
      name: t("plan.eco.title"),
      prices: {
        1: { egp: 200, usd: 4 },
        3: { egp: 600, usd: 12 },
        6: { egp: 1000, usd: 20 },
        12: { egp: 2000, usd: 40 },
      },
      freeMonths: 1,
      popular: false,
      features: [
        t("plan.eco.feature1"),
        t("plan.eco.feature2"),
        t("plan.eco.feature3"),
        t("plan.eco.feature4"),
      ],
    },
    {
      name: t("plan.golden.title"),
      prices: {
        1: { egp: 500, usd: 10 },
        3: { egp: 1500, usd: 30 },
        6: { egp: 2500, usd: 50 },
        12: { egp: 5000, usd: 100 },
      },
      freeMonths: 1,
      popular: false,
      features: [
        t("plan.golden.feature1"),
        t("plan.golden.feature2"),
        t("plan.golden.feature3"),
        t("plan.golden.feature4"),
        t("plan.golden.feature5"),
      ],
    },
    {
      name: t("plan.ladies.title"),
      prices: {
        1: { egp: 500, usd: 10 },
        3: { egp: 1200, usd: 24 },
        6: { egp: 2500, usd: 50 },
        12: { egp: 4500, usd: 90 },
      },
      popular: false,
      features: [
        t("plan.ladies.feature1"),
        t("plan.ladies.feature2"),
        t("plan.ladies.feature3"),
        t("plan.ladies.feature4"),
      ],
    },
    {
      name: t("plan.vip.title"),
      prices: {
        1: { egp: 1000, usd: 20 },
        3: { egp: 3000, usd: 60 },
        6: { egp: 5000, usd: 100 },
        12: { egp: 8000, usd: 160 },
      },
      freeMonths: 1,
      popular: false,
      features: [
        t("plan.vip.feature1"),
        t("plan.vip.feature2"),
        t("plan.vip.feature3"),
        t("plan.vip.feature4"),
        t("plan.vip.feature5"),
        t("plan.vip.feature6"),
        t("plan.vip.feature7"),
      ],
    },
  ];

  const durations = [
    {
      label: t("duration.1"),
      value: 1,
    },
    {
      label: t("duration.3"),
      value: 3,
    },
    {
      label: t("duration.6"),
      value: 6,
    },
    {
      label: t("duration.12"),
      value: 12,
    },
  ];

  const reviews = [
    {
      name: t("reviews.review1.name"),
      rating: 5,
      review: t("reviews.review1.review"),
      image: "/middle-eastern-man-fitness.png",
    },
    {
      name: t("reviews.review2.name"),
      rating: 5,
      review: t("reviews.review2.review"),
      image: "/middle-eastern-woman-fitness.png",
    },
    {
      name: t("reviews.review3.name"),
      rating: 5,
      review: t("reviews.review3.review"),
      image: "/middle-eastern-woman-fitness.png",
    },
    {
      name: t("reviews.review4.name"),
      rating: 5,
      review: t("reviews.review4.review"),
      image: "/middle-eastern-woman-fitness.png",
    },
    {
      name: t("reviews.review5.name"),
      rating: 5,
      review: t("reviews.review5.review"),
      image: "/middle-eastern-woman-fitness.png",
    },
    {
      name: t("reviews.review6.name"),
      rating: 5,
      review: t("reviews.review6.review"),
      image: "/middle-eastern-woman-fitness.png",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                {t("pricingPage.badge")}
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                {t("pricingPage.title1")}{" "}
                <span className="text-primary">{t("pricingPage.title2")}</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t("pricingPage.subtitle")}
              </p>
            </div>
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {t("pricingPage.feature1.title")}
                </div>
                <div className="text-sm text-muted-foreground">
                  {t("pricingPage.feature1.subtitle")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {t("pricingPage.feature2.title")}
                </div>
                <div className="text-sm text-muted-foreground">
                  {t("pricingPage.feature2.subtitle")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {t("pricingPage.feature3.title")}
                </div>
                <div className="text-sm text-muted-foreground">
                  {t("pricingPage.feature3.subtitle")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Duration Selector */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex flex-wrap justify-center gap-2 rounded-xl border border-muted p-1 bg-muted/30">
              {durations.map((duration) => (
                <Button
                  key={duration.value}
                  variant={
                    duration.value === selectedDuration ? "default" : "ghost"
                  }
                  size="lg"
                  className="rounded-lg px-4"
                  onClick={() => setSelectedDuration(duration.value)}
                >
                  {duration.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans
              .filter((plan, index) => {
                return true;
              })
              .map((plan, index) => (
                <Card
                  key={index}
                  className={`relative ${
                    plan.popular
                      ? "border-primary shadow-2xl scale-105 bg-card"
                      : "hover:shadow-lg"
                  } transition-all duration-300`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-6 py-1">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <div className="text-4xl font-bold text-primary mb-2">
                      {plan?.prices?.[selectedDuration]?.[currencyKey]}{" "}
                      {userIpRegion === "EG" ? "EGP" : "USD"}
                    </div>
                    {/* <CardDescription className="text-base">
                      {plan.description}
                    </CardDescription> */}
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-2">
                      {plan.freeMonths && selectedDuration === 3 && (
                        <div className="text-muted-foreground">
                          + {plan.freeMonths} {t("plan.freeMonths")}
                        </div>
                      )}
                    </div>
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                          : ""
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                      size="lg"
                      onClick={() => {
                        openPopup({
                          title: plan?.name ?? "Untitled Plan",
                          duration: selectedDuration,
                          price:
                            plan?.prices?.[selectedDuration]?.[currencyKey] ??
                            0,
                          region: userIpRegion,
                        });
                      }}
                    >
                      {t("pricing.cta")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>

          {/* <div className="text-center mt-12 space-y-4">
            <p className="text-muted-foreground">{t("pricingPage.hook")}</p>
            <Button variant="outline" size="lg">
              {t("pricingPage.hookCta")}
            </Button>
          </div> */}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-secondary/10 text-secondary border-secondary/20">
              {t("questions.badge")}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("questions.title1")}{" "}
              <span className="text-primary">{t("questions.title2")}</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: t("questions.q1"),
                answer: t("questions.a1"),
              },
              {
                question: t("questions.q2"),
                answer: t("questions.a2"),
              },
              {
                question: t("questions.q3"),
                answer: t("questions.a3"),
              },
              {
                question: t("questions.q4"),
                answer: t("questions.a4"),
              },
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ScrollReveal direction="up" delay={100}>
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <Badge className="bg-primary/20 text-primary border-primary/30 font-bold">
                {t("reviews.badge")}
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-black">
                {t("reviews.title")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("reviews.subtitle")}
              </p>
            </div>
            <div dir="rtl">
              <Swiper
                modules={[Pagination]}
                loop={true} // 👈 makes it infinite
                spaceBetween={20}
                pagination={{ clickable: true }}
                breakpoints={{
                  320: { slidesPerView: 1 }, // mobile
                  768: { slidesPerView: 2 }, // tablet
                  1024: { slidesPerView: 3 }, // desktop
                }}
              >
                {reviews.map((review, index) => (
                  <SwiperSlide key={index}>
                    <ScrollReveal direction="up" delay={200 + index * 100}>
                      <Card className="border-border/20 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                        <CardContent className="p-6 space-y-4">
                          <div className="flex items-center space-x-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-5 w-5 fill-primary text-primary"
                              />
                            ))}
                          </div>
                          <p className="text-muted-foreground italic">
                            "{review.review}"
                          </p>
                          <div className="flex items-center space-x-3">
                            <img
                              src={review.image || "/placeholder.svg"}
                              alt={review.name}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                              <div className="font-bold">{review.name}</div>
                              <div className="text-sm text-muted-foreground">
                                {t("reviews.verified")}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </ScrollReveal>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <div className="space-y-4">
              <Badge className="bg-secondary/10 text-secondary border-secondary/20">
                {t("transform.badge")}
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold">
                {t("transform.title1")}{" "}
                <span className="text-primary">{t("transform.title2")}</span>{" "}
                {t("transform.title3")}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t("transform.subtitle")}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {t("transform.cta1")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                {t("transform.cta2")}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              {t("transform.footer")}
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
