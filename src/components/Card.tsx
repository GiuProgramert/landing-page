import "../assets/css/Card.css";

interface CardParms {
  children: JSX.Element | JSX.Element[] | boolean;
  style?: React.CSSProperties;
  className?: string;
}

function Card({ style, children, className }: CardParms) {
  return (
    <article style={style} className={`card ${className}`}>
      {children}
    </article>
  );
}

export default Card;
