import { create } from "zustand";
import { persist } from "zustand/middleware";

const useThemeModeStore = create(
  persist(
    (set) => ({
      mode: "light",
      setThemeMode: (newMode) => set(newMode),
    }),
    {
      name: "theme-mode", // key for localStorage
    }
  )
);

export default useThemeModeStore;
