import React from "react"
import DownloadCV from "./DownloadCV"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Node.js" },
  { skill: "Redux" },
  { skill: "Express" },
  { skill: "Sequelize" },
  { skill: "MongoDB" },
  { skill: "PostgreSQL" },
  { skill: "GraphQL" },
  { skill: "Apollo" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Bootstrap" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Sobre Mi
          <hr className="w-6 h-1 mx-auto my-4 bg-pink-400 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
            ¡Te invito a conocerme!
            </h1>
            <p>
              Hola a todos, mi nombre es Gerónimo soy un desarrollador de software <span className="font-bold">muy ambicioso</span> y <span className="font-bold">motivado</span> que vive en un pueblo tranquilo en el sur de Córdoba, Argentina.
            </p>
            <br />
            <p>
              Estudiaba ingeniería en sistemas en la universidad tecnológica nacional pero dejé la carrera para meterme de lleno en el barro en el mundo de la programación, que es lo que me llena. Terminé un bootcamp de programación Fullstack de 6 meses y hasta el día de hoy sigo actualizando mis habilidades y tomando cursos.
            </p>
            <br />
            <p>
              Tengo una amplia gama de pasatiempos y pasiones que me mantienen ocupado. Desde jugar al pádel, ir al gimnasio, juntarme con mis amigos. Siempre estoy buscando nuevas experiencias y me encanta mantenerme comprometida y aprender cosas nuevas.
            </p>
            <br />
            <p>
              {/* <span className="font-bold text-pink-400">
                never stop growing
              </span>{" "} */}
              Creo que nunca se debe dejar de crecer y eso es lo que me esfuerzo por hacer, tengo pasión por la tecnología y el deseo de <span className="font-bold text-pink-400">empujar siempre los límites de lo que es posible</span>. Estoy emocionado de ver a dónde me lleva mi carrera y siempre estoy abierto a nuevas oportunidades. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Mis habilidades Tech</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <div className="py-6">
              <DownloadCV />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
