import "../assets/css/Profile.css";

import Card from "./Card";
import myPhoto from "../assets/img/my-photo.jpeg";

function Profile() {
  return (
    <Card className="profile-card">
      <div className="profile-photo">
        <img src={myPhoto} alt="Giuliano Díaz's photo" />
      </div>
      <div className="profile-description">
        <p>
          Soy un Desarrollador Full Stack con experiencia en Desarrollo Frontend
          y Backend, Gestión de Bases de Datos y Soporte a ERP. Me apasiona la
          programación y me encanta estar al día con las últimas tecnologías.
        </p>
        <p>
          Mi conjunto de habilidades incluye JavaScript, Lógica de Programación,
          Laravel, Java, Mapeo Objeto-Relacional, React.js, PHP, Lenguajes de
          Programación, Django REST Framework, Análisis de Datos, PostgreSQL,
          Desarrollo de Software, Odoo, Node.js, Algoritmos, Análisis de
          Algoritmos y Django.
        </p>
        <p>
          Siempre estoy dispuesto a asumir nuevos desafíos y aprender nuevas
          tecnologías.
        </p>
      </div>
    </Card>
  );
}

export default Profile;
