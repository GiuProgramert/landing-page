import Card from "./Card";
import experiences from "../constans/experiences";
import Experience from "./Experience";
import { useTranslation } from "react-i18next";

function Experiencies() {
  const { t } = useTranslation();

  return (
    <Card id="experiences" headerName={t('experiences')}>
      {experiences.map((experience) => (
        <Experience {...experience} key={experience.companyName} />
      ))}
    </Card>
  );
}

export default Experiencies;
