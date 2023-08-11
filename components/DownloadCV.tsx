"use client" // this is a client component
import React from 'react'
import { HiArrowDown } from "react-icons/hi"
import { useTranslation } from "react-i18next"

const DownloadCV = () => {
    const [t, i18n] = useTranslation("global");
    return (
        <span>
            <a
                href="./CV - Geronimo Medina.pdf"
                download
                className=" hover:-translate-y-1 transition-transform inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold px-4 py-3 rounded shadow cursor-pointer"
            >
                <HiArrowDown size={20} className="inline mr-2" />
                {t("dowloadCVbutton.text")}
            </a>
        </span>
    );
}

export default DownloadCV;