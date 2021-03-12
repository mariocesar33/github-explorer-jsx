import { useState, useEffect } from 'react';

import RepositoryItem from "./RepositoryItem";
import '../styles/repositories.scss';

export default function RepositoryList() {
  const [repositories, setRepositories] = useState([]);
  //https://api.github.com/orgs/rocketseat/repos
  useEffect(() => {
    fetch('https://api.github.com/users/mariocesar33/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, []);

  return(
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository => {
          return <RepositoryItem repository={repository} key={repository.id}/>
        })}
      </ul>
    </section>
  );
}