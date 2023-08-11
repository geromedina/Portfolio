"use client" // this is a client component
import React, { useState, useEffect } from "react"
import { Link } from "react-scroll/modules"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import { useTranslation } from "react-i18next"

interface NavItem {
  label: string
  page: string
}

export default function Navbar({ onLanguageChange }: { onLanguageChange: (language: string) => void }) {
  const [t, i18n] = useTranslation("global");
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const pathname = usePathname()
  const [navbar, setNavbar] = useState(false)

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, []);

  const NAV_ITEMS: Array<NavItem> = [
    {
      label: t("navbar.home"),
      page: "home",
    },
    {
      label: t("navbar.about"),
      page: "about",
    },
    {
      label: t("navbar.portfolio"),
      page: "portfolio",
    },
    {
      label: t("navbar.contact"),
      page: "contact",
    },
  ]

  return (
    <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="home">
              <div className="container flex items-center space-x-2">
                <h2 className="text-2xl font-bold">Geronimo Medina</h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
              }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 cursor-pointer">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    className={
                      "block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100"
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </Link>
                )
              })}
              <div className="flex space-x-2">
                <button onClick={() => {
                  onLanguageChange("es");
                  i18n.changeLanguage("es");
                }} className="bg-slate-100 p-2 rounded-xl text-black font-semibold">Español</button>
                <button onClick={() => {
                  onLanguageChange("en");
                  i18n.changeLanguage("en");
                }} className="bg-slate-100 p-2 rounded-xl text-black font-semibold">English</button>
                {currentTheme === "dark" ? (
                  <button
                    onClick={() => setTheme("light")}
                    className="bg-slate-100 p-2 rounded-xl"
                  >
                    <RiSunLine size={25} color="black" />
                  </button>
                ) : (
                  <button
                    onClick={() => setTheme("dark")}
                    className="bg-slate-100 p-2 rounded-xl"
                  >
                    <RiMoonFill size={25} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div >
    </header >
  )
}
