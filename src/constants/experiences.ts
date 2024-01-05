import ExperienceDesc from "../schemas/ExperienceDesc";
import paracanLogo from "../assets/img/paracan-logo.jpeg";
import codysLogo from "../assets/img/codys-logo.jpeg";

const experiences: ExperienceDesc[] = [
  {
    nameES: "Desarrollador Full stack",
    nameUS: "Full stack Developer",
    companyName: "Paracan Limited",
    companyImage: paracanLogo,
    descriptionES: [
      'Experiencia en el desarrollo Frontend utilizando React.js.',
      'Competencia en el desarrollo Backend con Django y Django REST Framework',
      'Habilidad en la gestión de bases de datos, con especial enfoque en PostgreSQL.',
      'Amplia experiencia en la implementación, soporte y desarrollo de módulos para Odoo ERP.',
      'Elaboración de Scripts de Analisis de datos con Python y Pandas',
      'Trabajo bajo métodologia Scrum',
    ],
    descriptionUS: [
      'Experience in Frontend development using React.js.',
      'Proficiency in Backend development with Django and Django REST Framework.',
      'Ability in database management, with special focus on PostgreSQL.',
      'Extensive experience in the implementation, support and development of modules for Odoo ERP.',
      'Development of data analysis scripts with Python and Pandas.',
      'Work under Scrum methodology',
    ],
    dateFromES: "sept. 2022",
    dateFromUS: "sept. 2022",
    dateToES: "Actualidad",
    dateToUS: "Currently working here",
    skills: [
      "Scrum",
      "Data Analytics",
      "Django",
      "PostgreSQL",
      "Django REST framework",
      "Odoo",
      "React.js",
      "JavaScript",
      "Node.js",
      "Python",
    ],
  },
  {
    nameES: "Programador Full stack",
    nameUS: "Full stack Programmert",
    companyName: "Codys S.A",
    companyImage: codysLogo,
    descriptionES: [
      'Experiencia sólida en desarrollo utilizando Laravel.',
      'Competencia en el manejo eficiente de bases de datos.',
      'Habilidades destacadas en el desarrollo Frontend con HTML, CSS y Javascript.',
      'Experiencia en la creación de scripts utilizando Python.',
      'Aplicación del método Scrum en entornos de trabajo.',
    ],
    descriptionUS: [
      'Solid development experience using Laravel.',
      'Proficiency in efficient database management.',
      'Outstanding Frontend development skills with HTML, CSS and',
      'Javascript.',
      'Experience in scripting using Python.',
      'Application of the Scrum method in working environments',
    ],
    dateFromES: "dic. 2021",
    dateFromUS: "dec. 2021",
    dateToES: "ago. 2022",
    dateToUS: "Agu. 2022",
    skills: ["Scrum", "Laravel", "JavaScript", "PHP", "MySQL", "Python"],
  },
];

export default experiences