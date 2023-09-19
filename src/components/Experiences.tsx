import Card from "./Card";
import experiencesES from "../constants/experiences";
import Experience from "./Experience";
import { useTranslation } from "react-i18next";

function Experiencies() {
  const { t } = useTranslation();

  return (
    <Card id="experiences" headerName={t('experiences')}>
      {experiencesES.map((experience) => (
        <Experience {...experience} key={experience.companyName} />
      ))}
    </Card>
  );
}

export default Experiencies;
