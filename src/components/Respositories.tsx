import { useState, useEffect, useMemo } from "react";
import PinnedRepo from "../schemas/PinnedRepo";
import Card from "./Card";
import Repository from "./Repository";
import Loader from "./Loader";

import "../assets/css/Repositories.css";

function Repositories() {
  const [pinnedRepos, setPinnedRepos] = useState<PinnedRepo[]>([]);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchPinnedRepos = () => {
    setIsLoading(true);
    fetch("https://gh-pinned-repos.egoist.dev/?username=GiuProgramert")
      .then((res) => res.json())
      .then((pinnedRepos: PinnedRepo[]) => {
        setPinnedRepos(pinnedRepos);
        setHasError(false);
      })
      .catch((err) => {
        console.log(err);
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchPinnedRepos();
  }, []);

  const memoPinnedRepos = useMemo(
    () =>
      pinnedRepos.map((pinnedRepo) => (
        <Repository {...pinnedRepo} key={pinnedRepo.repo} />
      )),
    [pinnedRepos]
  );

  const repositoriesClass = useMemo(
    () => (isLoading ? "repositories-loading" : "repositories"),
    [isLoading]
  );

  return (
    <Card
      id="repositories"
      className={repositoriesClass}
      headerName="Respositorios"
    >
      {isLoading ? (
        <Loader />
      ) : !hasError ? (
        memoPinnedRepos
      ) : (
        <p className="repo-error">
          Un error inesperado ocurrio al intentar obtener los respositorios pero
          puedes verlos en mi
          <a href="https://github.com/GiuProgramert">
            <i className="fa-brands fa-github"></i>Github
          </a>
        </p>
      )}
    </Card>
  );
}

export default Repositories;
