import React, { useEffect } from "react";
// mui
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
// __apis
import { createTrainingRequest } from "@/__apis__/trainingRequest";
// formik
import { useFormik } from "formik";
// yup
import * as Yup from "yup";
// componenets
import Iconify from "./Iconify";
// stores
import useSubscribePopupStore from "@/stores/subscibePopUpStore";
import useAlertStore from "@/stores/alertStore";
// hooks
import useLocales from "@/hooks/useLocales";

function SubscribeNowPopUp() {
  const { triggerAlert } = useAlertStore();

  const { isTriggred, data, closePopup } = useSubscribePopupStore();

  const { translate, currentLang } = useLocales();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      gender: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phoneNumber: Yup.string().required("Phone number is required"),
      gender: Yup.string().required("Gender is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      const finalValues = {
        ...values,
        packageName: data?.data?.title,
        packageDuration: data?.data?.duration,
        packagePrice: data?.data?.price,
        region: data?.data?.region,
      };
      await createTrainingRequest(finalValues)
        .then((response) => {
          triggerAlert({
            triggered: true,
            type: "success",
            message: "Request submitted successfully!",
          });
          resetForm();
          closePopup();
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
    errors,
    setFieldValue,
    dirty,
    isSubmitting,
    touched,
    handleSubmit,
    values,
    getFieldProps,
  } = formik;

  return (
    <Dialog open={isTriggred} onClose={closePopup} fullWidth>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              {translate(
                "componentsTranslations.subscriptionPopUpTranslations.title"
              )}{" "}
              <span style={{ color: "#00C2FF" }}>{data?.data?.title}</span>
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              label={translate(
                "componentsTranslations.subscriptionPopUpTranslations.fields.firstName"
              )}
              value={values.firstName}
              onChange={(event) =>
                setFieldValue("firstName", event.target.value)
              }
              {...getFieldProps("firstName")}
              error={touched.firstName && Boolean(errors.firstName)}
              helperText={touched.firstName && errors.firstName}
              fullWidth
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              label={translate(
                "componentsTranslations.subscriptionPopUpTranslations.fields.lastName"
              )}
              value={values.lastName}
              onChange={(event) =>
                setFieldValue("lastName", event.target.value)
              }
              {...getFieldProps("lastName")}
              error={touched.lastName && Boolean(errors.lastName)}
              helperText={touched.lastName && errors.lastName}
              fullWidth
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              label={translate(
                "componentsTranslations.subscriptionPopUpTranslations.fields.email"
              )}
              value={values.email}
              onChange={(event) => setFieldValue("email", event.target.value)}
              {...getFieldProps("email")}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              fullWidth
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              label={translate(
                "componentsTranslations.subscriptionPopUpTranslations.fields.phoneNumber"
              )}
              value={values.phoneNumber}
              onChange={(event) =>
                setFieldValue("phoneNumber", event.target.value)
              }
              {...getFieldProps("phoneNumber")}
              error={touched.phoneNumber && Boolean(errors.phoneNumber)}
              helperText={touched.phoneNumber && errors.phoneNumber}
              fullWidth
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              label={translate(
                "componentsTranslations.subscriptionPopUpTranslations.fields.gender"
              )}
              select
              value={values.gender}
              onChange={(event) => setFieldValue("gender", event.target.value)}
              {...getFieldProps("gender")}
              error={touched.gender && Boolean(errors.gender)}
              helperText={touched.gender && errors.gender}
              fullWidth
            >
              <MenuItem value="Male">
                {translate(
                  "componentsTranslations.subscriptionPopUpTranslations.fields.male"
                )}
              </MenuItem>
              <MenuItem value="Female">
                {translate(
                  "componentsTranslations.subscriptionPopUpTranslations.fields.female"
                )}
              </MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ gap: currentLang.value === "ar" ? 1 : 0 }}>
        <Button
          variant="outlined"
          color="error"
          onClick={() => {
            closePopup();
          }}
        >
          {translate(
            "componentsTranslations.subscriptionPopUpTranslations.buttons.cancel"
          )}
        </Button>
        <Button
          variant="contained"
          endIcon={
            <Iconify
              icon="fluent:send-48-filled"
              sx={{
                mr: currentLang.value === "ar" ? 1 : 0,
                transform:
                  currentLang.value === "ar" ? "rotate(180deg)" : "none",
              }}
            />
          }
          onClick={handleSubmit}
          disabled={!dirty}
          loading={isSubmitting}
        >
          {translate(
            "componentsTranslations.subscriptionPopUpTranslations.buttons.submit"
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default SubscribeNowPopUp;
