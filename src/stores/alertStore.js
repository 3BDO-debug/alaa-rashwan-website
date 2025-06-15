import { create } from "zustand";

const useAlertStore = create((set) => ({
  alert: {
    triggered: false,
    type: "",
    message: "",
  },
  triggerAlert: (alert) => set(() => ({ alert })),
}));

export default useAlertStore;
