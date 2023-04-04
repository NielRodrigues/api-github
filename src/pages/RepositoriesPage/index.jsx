import React, {useState} from "react";
import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./Repositories";
import { Container, Sidebar, Main } from "./style";
import { getLangFrom } from "../../services/api";

function RepositoriesPage(){

  const [currentLanguage, setCurrentLanguage] = useState()

  const user = {
    login: "NielRodrigues",
    avatar_url: "https://avatars.githubusercontent.com/u/101821262?v=4",
    name: "Carlos Daniel Rodrigues",
    location: "Brasil",
    blog: "",
    company: '',
    followers: 0,
    following: 0,
  }

  const repositories = [
    {
      id: 1,
      name: "Repo 1",
      description: "",
      html_url: "https://github.com/NielRodrigues/API-Git-Hub",
      language: "JavaScript",
    },
    {
      id: 2,
      name: "Repo 2",
      description: "",
      html_url: "https://github.com/NielRodrigues/API-Git-Hub",
      language: "TypeScript",
    },
    {
      id: 3,
      name: "Repo 3",
      description: "",
      html_url: "https://github.com/NielRodrigues/API-Git-Hub",
      language: "Pyhton",
    },
    {
      id: 4,
      name: "Repo 4",
      description: "",
      html_url: "https://github.com/NielRodrigues/API-Git-Hub",
      language: "C#",
    },

  ]


  const languages = getLangFrom(repositories)


  const onFilterClick = (language) => {
      setCurrentLanguage(language)
  }

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} currentLanguage={currentLanguage} onClick={onFilterClick} />
      </Sidebar>
      <Main>
        <Repositories repositorie={repositories} currentLanguage={currentLanguage}/>
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
