"use client";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
// __apis__
import { createInquiryRequest } from "@/__apis__/inquiries";
// formik
import { useFormik } from "formik";
// yup
import * as Yup from "yup";
// stores
import useAlertStore from "@/stores/alertStore";
import { useLanguage } from "@/hooks/use-language";

export default function ContactPage() {
  const { triggerAlert } = useAlertStore();

  const { t } = useLanguage();

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

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                {t("contactPage.badge")}
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                {t("contactPage.title1")}{" "}
                <span className="text-primary">{t("contactPage.title2")}</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t("contactPage.subtitle")}
              </p>
            </div>
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {t("contactPage.feature1.title")}
                </div>
                <div className="text-sm text-muted-foreground">
                  {t("contactPage.feature1.subtitle")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {t("contactPage.feature2.title")}
                </div>
                <div className="text-sm text-muted-foreground">
                  {t("contactPage.feature2.subtitle")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {t("contactPage.feature3.title")}
                </div>
                <div className="text-sm text-muted-foreground">
                  {t("contactPage.feature3.subtitle")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">
                  {t("contactPage.form.title")}
                </CardTitle>
                <p className="text-muted-foreground">
                  {t("contactPage.form.subtitle")}
                </p>
              </CardHeader>
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
                      <label htmlFor="lastName" className="text-sm font-medium">
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
                      <option value="other">{t("contactForm.other")}</option>
                    </select>
                    {touched.fitnessGoal && errors.fitnessGoal && (
                      <p className="text-red-500 text-sm">
                        {errors.fitnessGoal}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      {t("contactForm.message")}
                    </label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder={t("contactForm.messagePlaceholder")}
                      {...getFieldProps("message")}
                    />
                    {touched.message && errors.message && (
                      <p className="text-red-500 text-sm">{errors.message}</p>
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

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <Badge className="bg-secondary/10 text-secondary border-secondary/20">
                    {t("info.badge")}
                  </Badge>
                  <h2 className="text-3xl font-bold">
                    {t("info.title1")}{" "}
                    <span className="text-primary"> {t("info.title2")}</span>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("info.subtitle")}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">{t("info.email")}</div>
                      <div className="text-muted-foreground">
                        alaashehata621@gmail.com
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <div className="font-semibold">{t("info.phone")}</div>
                      <div className="text-muted-foreground">
                        +20 106 708 5508
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">
                        {t("info.response.title")}
                      </div>
                      <div className="text-muted-foreground">
                        {t("info.response.subtitle")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">
                    {t("info.consultation.title")}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {t("info.consultation.subtitle")}
                  </p>
                  <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    {t("info.consultation.cta")}
                  </Button>
                </CardContent>
              </Card> */}

              {/* <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Training Location</h3>
                      <p className="text-muted-foreground mb-4">
                        While most of my coaching is done online, I also offer
                        in-person sessions in the Greater Los Angeles area for
                        Premium plan members.
                      </p>
                      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                        <img
                          src="/los-angeles-fitness-studio-location-map.png"
                          alt="Training location"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              {t("qa.badge")}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("qa.title1")}{" "}
              <span className="text-primary"> {t("qa.title2")}</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{t("qa.q1")}</h3>
                <p className="text-muted-foreground">{t("qa.a1")}</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{t("qa.q2")}</h3>
                <p className="text-muted-foreground">{t("qa.a2")}</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{t("qa.q3")}</h3>
                <p className="text-muted-foreground">{t("qa.a3")}</p>
              </CardContent>
            </Card>

            {/* <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{t("qa.q4")}</h3>
                <p className="text-muted-foreground">{t("qa.a4")}</p>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      {/* <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <div className="space-y-4">
              <Badge className="bg-secondary/10 text-secondary border-secondary/20">
                Ready to Transform?
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold">
                Don't Wait - <span className="text-primary">Start Today</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Every day you wait is another day you could be working towards
                your goals. Take the first step now.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Subscribe Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}
