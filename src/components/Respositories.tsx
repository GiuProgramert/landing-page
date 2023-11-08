import { useState, useEffect, useMemo } from "react";
import PinnedRepo, { GithubRepo } from "../schemas/PinnedRepo";
import Card from "./Card";
import Repository from "./Repository";
import Loader from "./Loader";

import "../assets/css/Repositories.css";
import { useTranslation } from "react-i18next";

function Repositories() {
  const [pinnedRepos, setPinnedRepos] = useState<PinnedRepo[]>([]);
  const [githubRepos, setGithubRepos] = useState<GithubRepo[]>([])
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { t } = useTranslation();

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

  const fetchGithubRepos = () => {
    setIsLoading(true);
    fetch("https://api.github.com/users/GiuProgramert/repos")
      .then(res => res.json())
      .then((githubRepos: GithubRepo[]) => {
        setGithubRepos(githubRepos);
        setHasError(false);
      })
      .catch(err => {
        console.log(err);
        setHasError(true)
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  useEffect(() => {
    // fetchPinnedRepos();
    fetchGithubRepos();
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
      headerName={t('repositories')}
    >
      {isLoading ? (
        <Loader />
      ) : !hasError ? (
        memoPinnedRepos
      ) : (
        <p className="repo-error">
          {t('repoError')}
          <a href="https://github.com/GiuProgramert">
            <i className="fa-brands fa-github"></i>Github
          </a>
        </p>
      )}
    </Card>
  );
}

export default Repositories;
