import { create } from "zustand";
import { allLangs, defaultLang } from "../../config";

const getInitialLang = () => {
  if (typeof window === "undefined") return defaultLang;
  const storedLang = localStorage.getItem("i18nextLng");
  return allLangs.find((lang) => lang.value === storedLang) || defaultLang;
};

const useLocaleStore = create((set) => ({
  direction: getInitialLang().value === "en" ? "ltr" : "rtl",
  currentLang: getInitialLang(),
  setDirection: (dir) => set(() => ({ direction: dir })),
  setCurrentLang: (lang) =>
    set(() => ({
      currentLang: allLangs.find((l) => l.value === lang) || defaultLang,
      direction: lang === "en" ? "ltr" : "rtl",
    })),
}));

export default useLocaleStore;
