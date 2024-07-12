"use client"; // this is a client component
import React from "react";
import DownloadCV from "./DownloadCV";
import { useTranslation } from "react-i18next";

const skills = [
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React.js" },
  { skill: "Node.js" },
  { skill: "Next.js" },
  { skill: "Trello" },
  { skill: "Redux" },
  { skill: "Express.js" },
  { skill: "Tailwind CSS" },
  { skill: "Zod" },
  { skill: "Zustand" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Sequelize" },
  { skill: "MongoDB" },
  { skill: "PostgreSQL" },
  { skill: "GraphQL" },
];

const AboutSection = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          {t("aboutsection.h1")}
          <hr className="w-6 h-1 mx-auto my-4 bg-pink-400 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              {t("aboutsection.h1-2")}
            </h1>
            <p>
              {t("aboutsection.1")}{" "}
              <span className="font-bold">{t("aboutsection.2")}</span> y{" "}
              <span className="font-bold">{t("aboutsection.3")}</span>{" "}
              {t("aboutsection.4")}
            </p>
            <br />
            <p>{t("aboutsection.5")}</p>
            <br />
            <p>{t("aboutsection.6")}</p>
            <br />
            <p>
              {t("aboutsection.7")}{" "}
              <span className="font-bold text-pink-400">
                {t("aboutsection.8")}
              </span>
              {t("aboutsection.9")}
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">{t("aboutsection.10")}</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <div className="py-6">
              <DownloadCV />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
