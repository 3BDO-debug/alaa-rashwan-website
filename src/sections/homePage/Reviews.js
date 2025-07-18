"use client";
import React from "react";
import Slider from "react-slick";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useLocales from "@/hooks/useLocales";

// Dummy reviews
const reviews = [
  {
    name: "Salama",
    image: "",
    description:
      "نسبة الدهون ٣٩.٩ والوزن ٧٦ كجم – نزول ٥ كيلو بفضل الله، ومعدل الحرق بدأ يتحسن 🌟",
  },
  {
    name: "Nehal",
    image: "",
    description:
      "هدومي اللي كانت ضيقة بقيت تلبس تاني – حسيت إن جسمي اتحسن وبقى صحي – أجمل إحساس ❤️",
  },
  {
    name: "Hossam",
    image: "",
    description:
      "الوزن وصل لـ 87 كجم في الاختبارات بعد ما كان 86.6 كجم من يومين، والطول 179 سم. الحمد لله، فيه تحسّن ملحوظ.",
  },
  {
    name: "Alaa",
    image: "",
    description: "نزل الوزن من 86 كجم إلى 83.1 كجم – نزول حوالي 3 كجم 👏💖",
  },
  {
    name: "Zyad",
    image: "",
    description:
      "كابتن علاء من أحسن المدربين، اهتمام ومتابعة ورد على أي استفسار في أي وقت.",
  },
  {
    name: "Abanoub",
    image: "",
    description:
      "كوتش رشوان من أكتر الناس أمانة وإخلاص في شغله، بيتابع كويس جدًا وبيراعي ظروف الناس ماديًا ومعنويًا. إنسان محترم وخلوق، ربنا يوفقه دايمًا ❤️",
  },
];

function Reviews() {
  const { translate } = useLocales();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 10, p: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <Typography variant="h2" color="grey.0">
          {translate("pagesTranslations.homePageTranslations.reviews.title")}
        </Typography>
      </Box>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <Box key={index} px={1}>
            <Card sx={{ borderRadius: 5, boxShadow: 10, height: "25vh" }}>
              <CardContent>
                <Rating value={5} readOnly />
                <Stack direction="row" alignItems="center" gap={1} mt={2}>
                  <Avatar src={review.image} />
                  <Typography fontWeight={600}>{review.name}</Typography>
                  <Box
                    sx={{
                      bgcolor: "primary.main",
                      px: 1,
                      py: 0.5,
                      borderRadius: 2,
                      ml: 1,
                    }}
                  >
                    <Typography variant="body2" sx={{ color: "grey.0" }}>
                      {translate(
                        "pagesTranslations.homePageTranslations.reviews.verified"
                      )}
                    </Typography>
                  </Box>
                </Stack>
                <Typography sx={{ mt: 2, ml: 0.5 }}>
                  {review.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Container>
  );
}

export default Reviews;
