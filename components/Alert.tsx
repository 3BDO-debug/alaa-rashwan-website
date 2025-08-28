"use client";
import React from "react";
import useAlertStore from "@/stores/alertStore";

function Alert() {
  const { alert, triggerAlert } = useAlertStore();

  if (!alert.triggered) return null;

  // Define colors based on type
  const typeClasses: Record<string, string> = {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
    info: "bg-blue-500",
    "": "bg-gray-500",
  };

  return (
    <div
      className={`fixed bottom-5 right-5 px-4 py-3 rounded-lg shadow-lg text-white transition-opacity duration-300 ${typeClasses[alert.type]}`}
    >
      <div className="flex items-center justify-between gap-4">
        <span>{alert.message}</span>
        <button
          onClick={() =>
            triggerAlert({ triggered: false, type: "", message: "" })
          }
          className="ml-4 text-white hover:text-gray-200"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default Alert;
