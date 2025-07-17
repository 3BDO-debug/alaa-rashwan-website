"use client";
import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import useAlertStore from "@/stores/alertStore"; // adjust path as needed

const MUIAlert = React.forwardRef(function MUIAlert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Alert() {
  const { alert, triggerAlert } = useAlertStore();

  const handleClose = () => {
    setAlert({ triggered: false, type: "", message: "" });
  };

  return (
    <Snackbar
      open={alert.triggered}
      autoHideDuration={6000}
      onClose={() => triggerAlert({ triggered: false, type: "", message: "" })}
    >
      <MUIAlert
        onClose={() =>
          triggerAlert({ triggered: false, type: "", message: "" })
        }
        severity={alert.type}
        sx={{ width: "100%", color: "white" }}
      >
        {alert.message}
      </MUIAlert>
    </Snackbar>
  );
}

export default Alert;
