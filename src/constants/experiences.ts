import ExperienceDesc from "../schemas/ExperienceDesc";

const experiences: ExperienceDesc[] = [
  {
    nameES: "Desarrollador Full stack",
    nameUS: "Full stack Developer",
    companyName: "Paracan Limited",
    companyImage: "/src/assets/img/paracan-logo.jpeg",
    descriptionES: `
- Desarrollo Frontend React.js
- Desarrollo Backend Django, Django REST Framework
- Manejo de Base de datos PostgreSQL
- Implementación, Soporte y Desarrollo de Modulos Odoo ERP
    `,
    descriptionUS: `
- Frontend React.js Development
- Backend Django, Django REST Framework Development
- PostgreSQL Data Base Management
- Odoo ERP Implementation, Support and Module Development
    `,
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
    companyImage: "/src/assets/img/codys-logo.jpeg",
    descriptionES: `
- Desarrollo en Laravel
- Manejo de base de datos
- Desarrollo Frontend (Html / CSS / Javascript)
- Desarrollo de Scripts en Python
- Trabajo bajo la metodología Scrum
    `,
    descriptionUS: `
- Laravel Development
- Databases Management
- Frontend Development (HTML / CSS / JavaScript)
- Python Script Development
- Worked under the Scrum methodology    
    `,
    dateFromES: "dic. 2021",
    dateFromUS: "dec. 2021",
    dateToES: "ago. 2022",
    dateToUS: "Agu. 2022",
    skills: ["Scrum", "Laravel", "JavaScript", "PHP", "MySQL", "Python"],
  },
];

export default experiences