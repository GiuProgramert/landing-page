import "../assets/css/Footer.css";

const year = new Date().getFullYear();

function Footer() {
  return <footer className="footer">Giuliano Díaz - {year}</footer>;
}

export default Footer;
