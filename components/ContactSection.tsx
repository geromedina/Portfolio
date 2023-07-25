import React from "react"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import DownloadCV from "./DownloadCV"


const ContactSection = () => {
    return (

        <section id="contact">
            <div className="my-14 pb-12 md:pt-16 md:pb-8">
                <h1 className="text-center font-bold text-4xl mb-10">
                    Let&#39;s talk!
                    <hr className="w-6 h-1 mx-auto my-4 bg-pink-400 border-0 rounded"></hr>
                </h1>
                <div className="text-center mx-auto mb-5">
                    <a
                        href="https://www.linkedin.com/in/geronimomedina/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <button className="px-4 font-bold text-pink-400 hover:text-pink-700">LinkedIn</button>
                    </a>
                    <a
                        href="https://www.instagram.com/geromediina/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <button className="px-4 font-bold text-pink-400 hover:text-pink-700">Instagram</button>
                    </a>
                </div>
                <div className="text-center mx-auto">
                    <DownloadCV />
                </div>
            </div>
        </section>
    )
}

export default ContactSection
