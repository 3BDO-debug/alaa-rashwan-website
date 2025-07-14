import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import useLocaleStore from "@/stores/localeStore"; // path to the zustand store
import { allLangs } from "../../config";

export default function useLocales() {
  const { i18n, t: translate } = useTranslation();

  const { currentLang, direction, setDirection, setCurrentLang } =
    useLocaleStore();

  const handleChangeLanguage = (newLang) => {
    i18n.changeLanguage(newLang);
    setCurrentLang(newLang);
    document.dir = newLang === "en" ? "ltr" : "rtl";
  };

  useEffect(() => {
    i18n.changeLanguage(currentLang.value);
    document.dir = direction;
  }, [currentLang.value, direction, i18n]);

  return {
    onChangeLang: handleChangeLanguage,
    translate: (text, options) => translate(text, options),
    currentLang,
    allLangs: allLangs,
  };
}
