import "../assets/css/Profile.css";

import Card from "./Card";
import myPhoto from "../assets/img/my-photo.jpeg";
import { useTranslation } from "react-i18next";

function Profile() {
  const { t } = useTranslation();

  return (
    <Card className="profile-card">
      <div className="profile-photo">
        <img src={myPhoto} alt="Giuliano Díaz (giuProgramert) profile picture" />
      </div>
      <div className="profile-description">
        <h1>{t('title')}</h1>
        <p>{t("descriptionFirst")}</p>
        <p>{t("descriptionSecond")}</p>
        <p>{t("descriptionThird")}</p>
      </div>
    </Card>
  );
}

export default Profile;
