import "../assets/css/Repository.css";
import PinnedRepo from "../schemas/PinnedRepo";

function Repository(props: PinnedRepo) {
  const url = `https://github.com/${props.owner}/${props.repo}`;

  const languageStyles: React.CSSProperties = {
    color: props.languageColor,
    border: `1px solid ${props.languageColor}`,
  };

  return (
    <section className="repo">
      <div className="repo-url">
        <i className="fa-solid fa-up-right-from-square"></i>
        <a href={url} target="_blank">
          {props.repo}
        </a>
      </div>
      <div className="repo-language" style={languageStyles}>
        {props.language}
      </div>
    </section>
  );
}

export default Repository;
