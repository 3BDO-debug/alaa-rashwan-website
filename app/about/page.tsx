"use client";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Users, Target, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  {t("aboutUs.badge")}
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  {t("aboutUs.title1")}
                  <span className="text-primary"> {t("aboutUs.title2")}</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {t("aboutUs.subtitle")}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">
                    {t("aboutUs.experience")}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">
                    {t("aboutUs.changed")}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/2.jpg"
                alt="Coach Alaa Rashwan"
                className="rounded-2xl shadow-lg h-180 w-200 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <Badge className="bg-secondary/10 text-secondary border-secondary/20">
                {t("journey.badge")}
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold">
                {t("journey.title1")}{" "}
                <span className="text-primary">{t("journey.title2")} </span>
                {t("journey.title3")}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">
                  {t("journey.beginningTitle")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("journey.beginningSubtitle1")}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t("journey.beginningSubtitle2")}
                </p>
              </div>
              <div>
                <img
                  src="/assets/21.jpg"
                  alt="Coach Alaa Rashwan"
                  className="rounded-2xl shadow-lg h-110 w-200 object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="/assets/20.jpg"
                  alt="Coach Alaa Rashwan"
                  className="rounded-2xl shadow-lg h-110 w-200 object-cover"
                />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h3 className="text-2xl font-bold">
                  {t("journey.educationTitle")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("journey.educationSubtitle")}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span>{t("journey.qualification1")}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span>{t("journey.qualification2")}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span>{t("journey.qualification3")}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">
                  {t("journey.missionTitle")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("journey.missionSubtitle1")}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t("journey.missionSubtitle2")}
                </p>
              </div>
              <div>
                <img
                  src="/assets/19.jpg"
                  alt="Coach Alaa Rashwan"
                  className="rounded-2xl shadow-lg h-110 w-200 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Certificates Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              {t("credentials.badge")}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("ceredentials.title1")}{" "}
              <span className="text-primary">{t("ceredentials.title2")} </span>
              {t("ceredentials.title3")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("ceredentials.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "certificate1.jpeg",
              "certificate2.jpeg",
              "certificate3.jpeg",
              "certificate4.jpeg",
              "certificate5.jpeg",
              "certificate6.jpeg",
              "certificate7.jpeg",
              "certificate8.jpeg",
            ].map((cert, index) => (
              <motion.img
                key={index}
                src={`/certificates/${cert}`}
                alt={`certificate ${index + 1}`}
                className={`w-full object-contain rounded-lg shadow ${
                  index >= 4 ? "h-80" : "h-120"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              {t("values.badge")}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("values.title1")}{" "}
              <span className="text-primary">{t("values.title2")} </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  {t("values.value1.title")}
                </h3>
                <p className="text-muted-foreground">
                  {t("values.value1.description")}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  {t("values.value2.title")}
                </h3>
                <p className="text-muted-foreground">
                  {t("values.value2.description")}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  {t("values.value3.title")}
                </h3>
                <p className="text-muted-foreground">
                  {t("values.value3.description")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transformations Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-secondary/10 text-secondary border-secondary/20">
              {t("stories.badge")}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("stories.title1")}{" "}
              <span className="text-primary">{t("stories.title2")}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("stories.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { image: "/transformations/1.jpg" },
              { image: "/transformations/2.jpg" },
              { image: "/transformations/3.jpg" },
              { image: "/transformations/4.jpg" },
              { image: "/transformations/5.jpg" },
              { image: "/transformations/6.jpg" },
              { image: "/transformations/7.jpg" },
              { image: "/transformations/8.jpg" },
              { image: "/transformations/9.jpg" },
              { image: "/transformations/10.jpg" },
              { image: "/transformations/11.jpg" },
              { image: "/transformations/12.jpg" },
              { image: "/transformations/13.jpg" },
              { image: "/transformations/14.jpg" },
              { image: "/transformations/15.jpg" },
              { image: "/transformations/16.jpg" },
            ].map((story, index) => (
              <ScrollReveal
                key={index}
                direction="up"
                delay={50 + index * 50}
                // staggered delay like certificates
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square relative">
                    <img
                      src={story.image}
                      alt={`transformation ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <div className="space-y-4">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                {t("ready.badge")}
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold">
                {t("ready.title1")}{" "}
                <span className="text-primary">{t("ready.title2")}</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                {t("ready.subtitle")}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {t("ready.cta1")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  {t("ready.cta2")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
