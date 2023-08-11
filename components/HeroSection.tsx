"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import { useTranslation } from "react-i18next"

const HeroSection = () => {

  const [t, i18n] = useTranslation("global");

  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headshot.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">{t("herosection.h1")}</h1>
          </div>
          <p className="text-lg mt-4 mb-6 md:text-2xl font-medium">
            {t("herosection.1")}{" "}
            <span className="font-bold text-pink-400">
              {t("herosection.2")}{" "}
            </span>
            {t("herosection.3")}
          </p>
          <Link
            to="portfolio"
            className="text-neutral-100 font-semibold px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded shadow cursor-pointer"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            {t("herosection.4")}
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
