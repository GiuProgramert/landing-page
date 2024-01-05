import i18next, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";

const resources: Resource = {
  en: {
    translation: {
      title: "Full Stack Developer",
      experiences: "Experiences",
      repositories: "Repositories",
      descriptionFirst:
        "Experience in Frontend and Backend Development, Database Management and ERP Support. I am passionate about programming and love to keep up to date with the latest technologies.",
      descriptionSecond:
        "My skill set includes JavaScript, Programming Logic, Laravel, Java, Object-Relational Mapping, React.js, PHP, Programming Languages, Django REST Framework, Data Analysis, PostgreSQL, Software Development, Odoo, Node.js, Algorithms, Algorithm Analysis and Django.",
      descriptionThird:
        "I am always willing to take on new challenges and learn new technologies.",
      repoError:
        "An unexpected error occurred while trying to get the respositories but you can see them in my",
    },
  },
  es: {
    translation: {
      title: "Desarrollador Full Stack",
      experiences: "Experiencias",
      repositories: "Repositorios",
      descriptionFirst:
        "Experiencia en Desarrollo Frontend y Backend, Gestión de Bases de Datos y Soporte a ERP. Me apasiona la programación y me encanta estar al día con las últimas tecnologías.",
      descriptionSecond:
        "Mi conjunto de habilidades incluye JavaScript, Lógica de Programación, Laravel, Java, Mapeo Objeto-Relacional, React.js, PHP, Lenguajes de Programación, Django REST Framework, Análisis de Datos, PostgreSQL, Desarrollo de Software, Odoo, Node.js, Algoritmos, Análisis de Algoritmos y Django.",
      descriptionThird:
        "Siempre estoy dispuesto a asumir nuevos desafíos y aprender nuevas tecnologías.",
      repoError:
        "Un error inesperado ocurrio al intentar obtener los respositorios pero puedes verlos en mi",
    },
  },
};

i18next.use(initReactI18next).init({
  lng: "es",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources,
});

export default i18next;
