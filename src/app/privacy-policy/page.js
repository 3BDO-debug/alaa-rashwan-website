"use client";
import React from "react";
// mui
import { Box, Container, Grid, Typography } from "@mui/material";
// hooks
import useLocales from "@/hooks/useLocales";

function page() {
  const { translate } = useLocales();

  return (
    <Box sx={{ background: "linear-gradient(to bottom, #036292, #293F56)" }}>
      <Container maxWidth="xl" sx={{ py: 1 }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography color="grey.0" variant="h2" sx={{ fontWeight: "bold" }}>
            {translate("pagesTranslations.privacyPolicyPageTranslations.title")}
          </Typography>
        </Box>
        <Box sx={{ my: 10 }}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{ border: 1, borderColor: "grey.0", p: 1, borderRadius: 3 }}
              >
                <Box sx={{ bgcolor: "grey.0", borderRadius: 2, p: 1 }}>
                  <Typography variant="h4">
                    {translate(
                      "pagesTranslations.privacyPolicyPageTranslations.1.title"
                    )}
                  </Typography>
                  <Typography variant="subtitle2">
                    {translate(
                      "pagesTranslations.privacyPolicyPageTranslations.1.description"
                    )}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{ border: 1, borderColor: "grey.0", p: 1, borderRadius: 3 }}
              >
                <Box sx={{ bgcolor: "grey.0", borderRadius: 2, p: 1 }}>
                  <Typography variant="h4">
                    {translate(
                      "pagesTranslations.privacyPolicyPageTranslations.2.title"
                    )}
                  </Typography>
                  <Typography variant="subtitle2">
                    {translate(
                      "pagesTranslations.privacyPolicyPageTranslations.2.description"
                    )}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{ border: 1, borderColor: "grey.0", p: 1, borderRadius: 3 }}
              >
                <Box sx={{ bgcolor: "grey.0", borderRadius: 2, p: 1 }}>
                  <Typography variant="h4">
                    {translate(
                      "pagesTranslations.privacyPolicyPageTranslations.3.title"
                    )}
                  </Typography>
                  <Typography variant="subtitle2">
                    {translate(
                      "pagesTranslations.privacyPolicyPageTranslations.3.description"
                    )}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{ border: 1, borderColor: "grey.0", p: 1, borderRadius: 3 }}
              >
                <Box sx={{ bgcolor: "grey.0", borderRadius: 2, p: 1 }}>
                  <Typography variant="h4">
                    {translate(
                      "pagesTranslations.privacyPolicyPageTranslations.4.title"
                    )}
                  </Typography>
                  <Typography variant="subtitle2">
                    {translate(
                      "pagesTranslations.privacyPolicyPageTranslations.4.description"
                    )}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{ border: 1, borderColor: "grey.0", p: 1, borderRadius: 3 }}
              >
                <Box sx={{ bgcolor: "grey.0", borderRadius: 2, p: 1 }}>
                  <Typography variant="h4">
                    {translate(
                      "pagesTranslations.privacyPolicyPageTranslations.5.title"
                    )}
                  </Typography>
                  <Typography variant="subtitle2">
                    {translate(
                      "pagesTranslations.privacyPolicyPageTranslations.5.description"
                    )}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default page;
