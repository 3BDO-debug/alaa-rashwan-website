// stores/alertStore.ts
import { create } from "zustand";

type AlertType = "success" | "error" | "warning" | "info" | ""; 

interface AlertState {
  alert: {
    triggered: boolean;
    type: AlertType;
    message: string;
  };
  triggerAlert: (alert: AlertState["alert"]) => void;
}

const useAlertStore = create<AlertState>((set) => ({
  alert: {
    triggered: false,
    type: "",
    message: "",
  },
  triggerAlert: (alert) => set(() => ({ alert })),
}));

export default useAlertStore;
