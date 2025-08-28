"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// shadcn/ui
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
// icons
import { Send } from "lucide-react";
// api
import { createTrainingRequest } from "@/__apis__/trainingRequest";
// stores
import useSubscribePopupStore from "@/stores/subscibePopUpStore";
import useAlertStore from "@/stores/alertStore";
import { useLanguage } from "@/hooks/use-language";

function SubscribeNowPopUp() {
  const { triggerAlert } = useAlertStore();
  const { isTriggred, data, closePopup } = useSubscribePopupStore();
  const { t } = useLanguage();

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
        packageName: data?.title,
        packageDuration: data?.duration,
        packagePrice: data?.price,
        region: data?.region,
      };
      try {
        await createTrainingRequest(finalValues);
        triggerAlert({
          triggered: true,
          type: "success",
          message: "Request submitted successfully!",
        });
        resetForm();
        closePopup();
      } catch (error) {
        console.error(error);
        triggerAlert({
          triggered: true,
          type: "error",
          message: "Failed to submit request, try again later",
        });
      }
    },
  });

  const {
    errors,
    touched,
    handleSubmit,
    getFieldProps,
    values,
    setFieldValue,
    dirty,
    isSubmitting,
  } = formik;

  return (
    <Dialog open={isTriggred} onOpenChange={closePopup}>
      <DialogOverlay className="bg-blue-500/30 backdrop-blur-sm fixed inset-0" />

      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            {t("subscriptionPopUp.title")}{" "}
            <span className="text-primary">{data?.title}</span>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Name */}
          <div className="space-y-2">
            <Label htmlFor="firstName">
              {t("subscriptionPopUp.firstName")}
            </Label>
            <Input id="firstName" {...getFieldProps("firstName")} />
            {touched.firstName && errors.firstName && (
              <p className="text-sm text-red-500">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div className="space-y-2">
            <Label htmlFor="lastName">{t("subscriptionPopUp.lastName")}</Label>
            <Input id="lastName" {...getFieldProps("lastName")} />
            {touched.lastName && errors.lastName && (
              <p className="text-sm text-red-500">{errors.lastName}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">{t("subscriptionPopUp.email")}</Label>
            <Input id="email" type="email" {...getFieldProps("email")} />
            {touched.email && errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <Label htmlFor="phoneNumber">{t("subscriptionPopUp.phone")}</Label>
            <Input id="phoneNumber" {...getFieldProps("phoneNumber")} />
            {touched.phoneNumber && errors.phoneNumber && (
              <p className="text-sm text-red-500">{errors.phoneNumber}</p>
            )}
          </div>

          {/* Gender */}
          <div className="space-y-2">
            <Label htmlFor="gender">{t("subscriptionPopUp.gender")}</Label>
            <Select
              value={values.gender}
              onValueChange={(val) => setFieldValue("gender", val)}
            >
              <SelectTrigger>
                <SelectValue placeholder={t("subscriptionPopUp.gender")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Male">
                  {t("subscriptionPopUp.male")}
                </SelectItem>
                <SelectItem value="Female">
                  {t("subscriptionPopUp.female")}
                </SelectItem>
              </SelectContent>
            </Select>
            {touched.gender && errors.gender && (
              <p className="text-sm text-red-500">{errors.gender}</p>
            )}
          </div>

          {/* Actions */}
          <DialogFooter className="flex gap-2">
            <Button type="button" variant="outline" onClick={closePopup}>
              {t("subscriptionPopUp.cancel")}
            </Button>
            <Button
              type="submit"
              disabled={!dirty || isSubmitting}
              className="flex items-center gap-2"
            >
              {t("subscriptionPopUp.submit")}
              <Send className={"h-4 w-4 "} />
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default SubscribeNowPopUp;
