"use client"
import "../styles/globals.css"
import { useState, useEffect } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ThemeProvider } from "next-themes"

import { I18nextProvider } from "react-i18next"
import i18next from "i18next"
import global_es from "@/locales/es/global.json"
import global_en from "@/locales/en/global.json"

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [currentLanguage, setCurrentLanguage] = useState("es");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
      i18next.changeLanguage(savedLanguage);
    }
  }, []);

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
    localStorage.setItem("language", language);
    i18next.changeLanguage(language);
  }


  return (
    <I18nextProvider i18n={i18next}>
      <html lang={currentLanguage}>
        {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head />
        <body className="dark:bg-stone-900">
          <ThemeProvider enableSystem={true} attribute="class">
            <Navbar onLanguageChange={handleLanguageChange} />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </I18nextProvider>
  )
}
