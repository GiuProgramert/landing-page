import Card from "./Card";
import experiences from "../constans/experiences";
import Experience from "./Experience";

function Experiencies() {
  return (
    <Card>
      {experiences.map((experience) => (
        <Experience {...experience} key={experience.companyName} />
      ))}
    </Card>
  );
}

export default Experiencies;
