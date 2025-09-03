"use client";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// next
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { TextGradient } from "@/components/text-gradient";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { useLanguage } from "@/hooks/use-language";
// __apis__
import { createInquiryRequest } from "@/__apis__/inquiries";
// formik
import { useFormik } from "formik";
// yup
import * as Yup from "yup";
// stores
import useAlertStore from "@/stores/alertStore";
import useSubscribePopupStore from "@/stores/subscibePopUpStore";
// react
import { useCallback, useEffect, useState } from "react";
// __apis___
import { userIpRegionFetcher } from "@/__apis__/userIpRegion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export function HomePageClient() {
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

  const { push } = useRouter();

  const { triggerAlert } = useAlertStore();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
      fitnessGoal: "",
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string().required("Email is required"),
      phoneNumber: Yup.string().required("Phone number is required"),
      message: Yup.string().required("Message is required"),
      // fitnessGoal: Yup.string().required("Fitness goal is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      await createInquiryRequest(values)
        .then((response) => {
          triggerAlert({
            triggered: true,
            type: "success",
            message: "Request submitted successfully!",
          });
          resetForm();
        })
        .catch((error) => {
          console.log("error", error);
          triggerAlert({
            triggered: true,
            type: "error",
            message: "Failed to submit request, try again later",
          });
        });
    },
  });

  const {
    getFieldProps,
    setFieldValue,
    handleSubmit,
    touched,
    errors,
    values,
    handleBlur,
  } = formik;

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

      <section className="relative bg-gradient-to-br from-background via-primary/5 to-secondary/5 py-20 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-fitness-pattern opacity-10"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image first on mobile, right side on desktop */}
            <ScrollReveal
              direction="right"
              delay={200}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl"></div>
                <img
                  src="/assets/4.jpg"
                  alt="Coach Alaa Rashwan"
                  className="rounded-2xl shadow-lg w-full object-contain"
                />
              </div>
            </ScrollReveal>

            {/* Text second on mobile, left side on desktop */}
            <ScrollReveal
              direction="left"
              delay={100}
              className="order-2 lg:order-1"
            >
              <div className="space-y-8">
                <Badge className="bg-primary/20 text-primary border-primary/30 font-bold px-4 py-2 text-sm">
                  {t("hero.badge")}
                </Badge>

                <h1 className="text-4xl lg:text-6xl font-black leading-tight">
                  <TextGradient className="block">
                    {t("hero.title")}
                  </TextGradient>
                </h1>

                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg">
                  {t("hero.subtitle")}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => {
                      push("/pricing");
                    }}
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    {t("hero.cta.primary")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    onClick={() => {
                      push("/about");
                    }}
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary/20 hover:bg-primary/10 font-bold px-8 py-4 rounded-lg transition-all duration-300 bg-transparent"
                  >
                    {t("hero.cta.secondary")}
                  </Button>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 shadow-lg">
                  <div className="text-center">
                    <div className="text-3xl font-black text-primary">
                      5000+
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {t("hero.stats.clients")}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-primary">98%</div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {t("hero.stats.success")}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-primary">10+</div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {t("hero.stats.experience")}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About Section */}
      <ScrollReveal direction="fade" delay={100}>
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left" delay={200}>
                <div>
                  <img
                    src="/assets/2.jpg"
                    alt="Coach Alaa Rashwan"
                    className="rounded-2xl shadow-lg h-180 w-200 object-cover"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={300}>
                <div className="space-y-6">
                  <Badge className="bg-secondary/20 text-secondary border-secondary/30 font-bold">
                    {t("about.badge")}
                  </Badge>
                  <h2 className="text-3xl lg:text-4xl font-black">
                    {t("about.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t("about.description")}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="font-medium text-sm">
                        {t("about.qualification1")}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="font-medium text-sm">
                        {t("about.qualification2")}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="font-medium text-sm">
                        {t("about.qualification3")}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="font-medium text-sm">
                        {t("about.qualification4")}
                      </span>
                    </div>
                  </div>
                  <Link href="/about">
                    <Button
                      variant="outline"
                      size="lg"
                      className="font-bold bg-transparent"
                    >
                      {t("about.cta")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Transformations Section */}
      <ScrollReveal direction="up" delay={100}>
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <Badge className="bg-primary/20 text-primary border-primary/30 font-bold">
                {t("transformations.badge")}
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-black">
                {t("transformations.title")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("transformations.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  beforeImage: "/transformations/before2.jpg",
                  afterImage: "/transformations/after2.jpg",
                },
                {
                  beforeImage: "/transformations/before3.jpg",
                  afterImage: "/transformations/after3.jpg",
                },
                {
                  beforeImage: "/transformations/before4.jpg",
                  afterImage: "/transformations/after4.jpg",
                },
                {
                  beforeImage: "/transformations/before5.jpg",
                  afterImage: "/transformations/after5.jpg",
                },
                {
                  beforeImage: "/transformations/before6.jpg",
                  afterImage: "/transformations/after6.jpg",
                },
                {
                  beforeImage: "/transformations/before7.jpg",
                  afterImage: "/transformations/after7.jpg",
                },
                {
                  beforeImage: "/transformations/before8.jpg",
                  afterImage: "/transformations/after8.jpg",
                },
                {
                  beforeImage: "/transformations/before9.jpg",
                  afterImage: "/transformations/after9.jpg",
                },
                {
                  beforeImage: "/transformations/before10.jpg",
                  afterImage: "/transformations/after10.jpg",
                },
                {
                  beforeImage: "/transformations/before12.jpg",
                  afterImage: "/transformations/after12.jpg",
                },
                {
                  beforeImage: "/transformations/before13.jpg",
                  afterImage: "/transformations/after13.jpg",
                },
                {
                  beforeImage: "/transformations/before16.jpg",
                  afterImage: "/transformations/after16.jpg",
                },
              ].map((transformation, index) => (
                <ScrollReveal
                  key={index}
                  direction="up"
                  delay={100 + index * 100}
                >
                  <div className="space-y-4">
                    <BeforeAfterSlider
                      beforeImage={transformation.beforeImage}
                      afterImage={transformation.afterImage}
                      beforeAlt={` before transformation`}
                      afterAlt={`after transformation`}
                      className="shadow-lg border border-border/20 rounded-lg overflow-hidden"
                    />
                    {/* <div className="text-center space-y-2">
                      <h3 className="font-bold text-lg">
                        {transformation.name}
                      </h3>
                      <p className="font-medium text-primary">
                        {transformation.result}
                      </p>
                    </div> */}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Pricing Section */}
      <ScrollReveal direction="up" delay={100}>
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <Badge className="bg-secondary/20 text-secondary border-secondary/30 font-bold">
                {t("pricing.badge")}
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-black">
                {t("pricing.title")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("pricing.subtitle")}
              </p>
            </div>

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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans
                .filter((_, index) => {
                  return true;
                })
                .map((plan, index) => (
                  <ScrollReveal
                    key={index}
                    direction="up"
                    delay={200 + index * 100}
                  >
                    <Card
                      className={`relative ${
                        plan.popular
                          ? "border-primary shadow-lg scale-105"
                          : "border-border/20"
                      }`}
                    >
                      {plan.popular && (
                        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground font-bold">
                          {t("pricing.mostPopulor")}
                        </Badge>
                      )}
                      <CardContent className="p-8 text-center space-y-6">
                        <h3 className="text-2xl font-black">{plan.name}</h3>
                        <div className="space-y-2">
                          <div className="text-4xl font-black text-primary">
                            {plan?.prices?.[selectedDuration]?.[currencyKey]}{" "}
                            {userIpRegion === "EG" ? "EGP" : "USD"}
                          </div>
                        </div>
                        <ul className="space-y-3">
                          {plan.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center justify-center space-x-2"
                            >
                              <CheckCircle className="h-5 w-5 text-primary" />
                              <span className="font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-2">
                          {plan.freeMonths && selectedDuration === 3 && (
                            <div className="text-muted-foreground">
                              + {plan.freeMonths} {t("plan.freeMonths")}
                            </div>
                          )}
                        </div>
                        <Button
                          size="lg"
                          className={`w-full font-bold ${
                            plan.popular
                              ? "bg-primary hover:bg-primary/90"
                              : "bg-secondary hover:bg-secondary/90"
                          }`}
                          onClick={() => {
                            openPopup({
                              title: plan?.name ?? "Untitled Plan",
                              duration: selectedDuration,
                              price:
                                plan?.prices?.[selectedDuration]?.[
                                  currencyKey
                                ] ?? 0,
                              region: userIpRegion,
                            });
                          }}
                        >
                          {t("pricing.cta")}
                        </Button>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

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

      {/* Contact Us Form Section */}
      <ScrollReveal direction="up" delay={100}>
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ScrollReveal direction="left" delay={200}>
                <div className="space-y-6">
                  <Badge className="bg-secondary/20 text-secondary border-secondary/30 font-bold">
                    {t("contact.badge")}
                  </Badge>
                  <h2 className="text-3xl lg:text-4xl font-black">
                    {t("contact.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {t("contact.subtitle")}
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-6 w-6 text-primary" />
                      <span className="font-medium">
                        alaashehata621@gmail.com
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-6 w-6 text-primary" />
                      <span className="font-medium">+20 106 708 5508</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-6 w-6 text-primary" />
                      <span className="font-medium">Cairo, Egypt</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={300}>
                <Card className="border-border/20 shadow-lg">
                  <CardContent className="space-y-6">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      {/* First + Last Name */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label
                            htmlFor="firstName"
                            className="text-sm font-medium"
                          >
                            {t("contactForm.firstName")}
                          </label>
                          <Input
                            id="firstName"
                            placeholder={t("contactForm.firstNamePlaceholder")}
                            {...getFieldProps("firstName")}
                          />
                          {touched.firstName && errors.firstName && (
                            <p className="text-red-500 text-sm">
                              {errors.firstName}
                            </p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <label
                            htmlFor="lastName"
                            className="text-sm font-medium"
                          >
                            {t("contactForm.lastName")}
                          </label>
                          <Input
                            id="lastName"
                            placeholder={t("contactForm.lastNamePlaceholder")}
                            {...getFieldProps("lastName")}
                          />
                          {touched.lastName && errors.lastName && (
                            <p className="text-red-500 text-sm">
                              {errors.lastName}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          {t("contactForm.email")}
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder={t("contactForm.emailPlaceholder")}
                          {...getFieldProps("email")}
                        />
                        {touched.email && errors.email && (
                          <p className="text-red-500 text-sm">{errors.email}</p>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <label
                          htmlFor="phoneNumber"
                          className="text-sm font-medium"
                        >
                          {t("contactForm.phone")}
                        </label>
                        <Input
                          id="phoneNumber"
                          type="tel"
                          placeholder={t("contactForm.phonePlaceholder")}
                          {...getFieldProps("phoneNumber")}
                        />
                        {touched.phoneNumber && errors.phoneNumber && (
                          <p className="text-red-500 text-sm">
                            {errors.phoneNumber}
                          </p>
                        )}
                      </div>

                      {/* Fitness Goal (select) */}
                      <div className="space-y-2">
                        <label
                          htmlFor="fitnessGoal"
                          className="text-sm font-medium"
                        >
                          {t("contactForm.goal")}
                        </label>
                        <select
                          id="fitnessGoal"
                          value={values.fitnessGoal}
                          onChange={(e) =>
                            setFieldValue("fitnessGoal", e.target.value)
                          }
                          onBlur={handleBlur}
                          className="w-full p-3 border border-input rounded-md bg-background"
                        >
                          <option value="">{t("contactForm.select")}</option>
                          <option value="weight_loss">
                            {t("contactForm.weight")}
                          </option>
                          <option value="muscle_building">
                            {t("contactForm.muscle")}
                          </option>
                          <option value="general_fitness">
                            {t("contactForm.general")}
                          </option>
                          <option value="strength_training">
                            {t("contactForm.strength")}
                          </option>
                          <option value="nutrition_guidance">
                            {t("contactForm.nutrition")}
                          </option>
                          <option value="other">
                            {t("contactForm.other")}
                          </option>
                        </select>
                        {touched.fitnessGoal && errors.fitnessGoal && (
                          <p className="text-red-500 text-sm">
                            {errors.fitnessGoal}
                          </p>
                        )}
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium"
                        >
                          {t("contactForm.message")}
                        </label>
                        <Textarea
                          id="message"
                          rows={5}
                          placeholder={t("contactForm.messagePlaceholder")}
                          {...getFieldProps("message")}
                        />
                        {touched.message && errors.message && (
                          <p className="text-red-500 text-sm">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Submit */}
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        {t("contactForm.cta")}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>
      <Footer />
    </div>
  );
}
