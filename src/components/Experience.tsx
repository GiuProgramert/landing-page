import "../assets/css/Experience.css";
import ExperienceDesc from "../schemas/ExperienceDesc";

function Experience(props: ExperienceDesc) {
  return (
    <section className="experience">
      <div className="experience-header">
        <img src={props.companyImage} alt={`${props.companyName} logo`} />
        <div className="experience-company-data">
          <div className="name">{props.name}</div>
          <div className="company-name">{props.companyName}</div>
          <div className="date">
            {props.date_from} - {props.date_to}
          </div>
        </div>
      </div>
      <hr className="divider" />
      <div className="experience-body">
        <pre className="description">{props.description}</pre>
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
