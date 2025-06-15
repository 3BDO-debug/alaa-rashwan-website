"use client";
import React from "react";
import { MuiTelInput } from "mui-tel-input";

function MuiPhoneInput({ value, onChange, label, ...props }) {
  return (
    <MuiTelInput
      value={value}
      onChange={onChange}
      fullWidth
      label={label}
      {...props}
      defaultCountry="eg"
    />
  );
}

export default MuiPhoneInput;
