"use client";
import React, { createContext, useContext, useState } from "react";
import { translations } from "./translations";

type Lang = "de" | "en";

/* eslint-disable @typescript-eslint/no-unused-vars */
const LanguageContext = createContext({
  lang: "de" as Lang,
  setLang: (l: Lang) => {}, // Restored 'l' parameter to match the expected signature
  t: translations["de"]
});

export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [lang, setLang] = useState<Lang>("de");
  const t = translations[lang];
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
