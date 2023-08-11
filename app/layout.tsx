"use client"
import "../styles/globals.css"
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
  return (
    <I18nextProvider i18n={i18next}>
      <html lang="en">
        {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head />
        <body className="dark:bg-stone-900">
          <ThemeProvider enableSystem={true} attribute="class">
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </I18nextProvider>
  )
}
