import { useTranslation } from "react-i18next";
import "../assets/css/Navbar.css";

function Navbar() {
  // TODO implement i18n change button
  const { i18n, t } = useTranslation();

  return (
    <nav className="navbar">
      <div className="navbar-name">Giuliano Díaz (GiuProgramert)</div>
      <ul className="navbar-social">
        <li>
          <a href="#experiences">{t("experiences")}</a>
        </li>
        <li>
          <a href="#repositories">{t("repositories")}</a>
        </li>
        <li>
          <i className="fa-brands fa-github"></i>
          <a href="https://github.com/GiuProgramert" target="_blank">
            Github
          </a>
        </li>
        <li>
          <i className="fa-brands fa-linkedin"></i>
          <a href="https://www.linkedin.com/in/giuliano-diaz/" target="_blank">
            Linkedin
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
