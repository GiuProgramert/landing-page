import "../assets/css/Experience.css";

import ExperienceDesc from "../schemas/ExperienceDesc";
import { useTranslation } from "react-i18next";
import Langs from "../constants/Langs";

function Experience(props: ExperienceDesc) {
  const { i18n } = useTranslation();

  const isES = i18n.language === Langs.es;

  return (
    <section className="experience">
      <div className="experience-header">
        <img src={props.companyImage} alt={`${props.companyName} logo`} />
        <div className="experience-company-data">
          <div className="name">{isES ? props.nameES : props.nameUS}</div>
          <div className="company-name">{props.companyName}</div>
          <div className="date">
            {isES ? props.dateFromES : props.dateFromUS} -{" "}
            {isES ? props.dateToES : props.dateToUS}
          </div>
        </div>
      </div>
      <hr className="divider" />
      <div className="experience-body">
        <pre className="description">
          {isES ? props.descriptionES : props.descriptionUS}
        </pre>
        <hr className="divider" />
        <ul className="skills">
          {props.skills.map((skill) => (
            <li key={props.companyName + skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Experience;
