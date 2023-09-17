import "../assets/css/Card.css";

interface CardParms {
  id?: string;
  children: JSX.Element | JSX.Element[] | boolean;
  headerName?: string;
  style?: React.CSSProperties;
  className?: string;
}

function Card({ id, style, children, className, headerName }: CardParms) {
  return (
    <article id={id} className="card">
      <header className="card-header">
        <h1>{headerName}</h1>
      </header>
      <div style={style} className={className}>
        {children}
      </div>
    </article>
  );
}

export default Card;
