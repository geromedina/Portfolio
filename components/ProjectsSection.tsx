"use client" // this is a client component
import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import { useTranslation } from "react-i18next"


const ProjectsSection = () => {

  const [t, i18n] = useTranslation("global");

  const projects = [
    {
      name: t("projectssection.projects.1.name"),
      description: t("projectssection.projects.1.description"),
      image: t("projectssection.projects.1.image"),
      github: t("projectssection.projects.1.github"),
      link: t("projectssection.projects.1.link"),
    },
    {
      name: t("projectssection.projects.2.name"),
      description: t("projectssection.projects.2.description"),
      image: t("projectssection.projects.2.image"),
      github: t("projectssection.projects.2.github"),
      link: t("projectssection.projects.2.link"),
    },
    {
      name: t("projectssection.projects.3.name"),
      description: t("projectssection.projects.3.description"),
      image: t("projectssection.projects.3.image"),
      github: t("projectssection.projects.3.github"),
      link: t("projectssection.projects.3.link"),
    },
  ]

  return (
    <section id="portfolio">
      <h1 className="my-10 text-center font-bold text-4xl">
        {t("projectssection.h1")}
        <hr className="w-6 h-1 mx-auto my-4 bg-pink-400 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}

      </div>
    </section>
  )
}

export default ProjectsSection
