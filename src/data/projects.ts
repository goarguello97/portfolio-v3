import calculator from "../assets/projects-images/calculator.jpeg";
import musicPlayer from "../assets/projects-images/music-reproductor.jpeg";
import rollingcode from "../assets/projects-images/rollincode.jpeg";
import tmdb from "../assets/projects-images/tmdb.jpeg";
import weather from "../assets/projects-images/weather.jpeg";
import portfolio from "../assets/projects-images/portfolio.jpg";

export const projects = [
  {
    title: "Calculator App",
    description: "Aplicación de calculadora realizada con React.",
    image: calculator,
    link: "https://calculadora-opal-eight.vercel.app/",
    github: "https://github.com/goarguello97/calculadora/tree/master",
  },
  {
    title: "Music Player",
    description:
      "Reproductor de música realizado con React y estilos con Tailwind CSS.",
    image: musicPlayer,
    link: "https://music-player-iota-dun.vercel.app/",
    github: "https://github.com/goarguello97/music-player/tree/master",
  },
  {
    title: "Rolling Code Administración",
    description:
      "Aplicación web, para la administración de una escuela. Base de datos en MongoDB y mongoose cómo ODM. Utilizamos Node, Express y además Express-validator para la seguridad de las rutas. Por el lado del frontend utilizamos React, bootstrap, react-context para el manejo de los estados, useFormHook para los formularios y customs hooks para validaciones.",
    image: rollingcode,
    link: "https://project3-rollingcodeschool.vercel.app/",
    github:
      "https://github.com/goarguello97/project3-rollingcodeschool/tree/main",
  },
  {
    title: "TMDB",
    description:
      "Proyecto realizado con base de datos PostgreSQL y Sequelize como ORM. Utilize Node y Express en el backend y react con bootstrap en el frontend.",
    image: tmdb,
    link: "https://frontend-tmdb.vercel.app/",
    github: "https://github.com/goarguello97/frontend-tmdb/tree/master",
  },
  {
    title: "Weather App",
    description:
      "Aplicación en la cual podes consultar el clima actual en una ubicación en especifico, realizada con React y Tailwind CSS.",
    image: weather,
    link: "https://weather-app-blue-beta.vercel.app/",
    github: "https://github.com/goarguello97/weather-app/tree/master",
  },
  {
    title: "Portfolio",
    description: "Portfolio realizado con React y Tailwind CSS.",
    image: portfolio,
    link: "",
    github: "https://github.com/goarguello97/portfolio-v3",
  },
];
