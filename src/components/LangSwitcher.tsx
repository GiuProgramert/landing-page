import { useTranslation } from "react-i18next";
import Langs from "../constants/Langs";

import spainFlag from "../assets/img/spain_flag.png";
import eeuuFlag from "../assets/img/eeuu_flag.png";

import "../assets/css/LangSwitcher.css";

function LangSwitcher() {
  const { i18n } = useTranslation();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const { innerText } = event.currentTarget;

    const newLang = innerText.toLocaleLowerCase() === Langs.es ? Langs.us : Langs.es;

    i18n.changeLanguage(newLang);
  };

  const currentFlag = i18n.language === Langs.es ? spainFlag : eeuuFlag;

  return (
    <li className="lang">
      <img
        src={currentFlag}
        alt={`${i18n.language} flag photo`}
        className="lang-icon"
      />
      <a href="#" onClick={handleClick} className="lang">
        {i18n.language.toUpperCase()}
      </a>
    </li>
  );
}

export default LangSwitcher;
