import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./Repositories";
import { Loading, Logo, LoadingTitle, Container, Sidebar, Main } from "./style";
import { getUser, getRepos, getLangFrom } from "../../services/api";

function RepositoriesPage(){

  const {login} = useParams();

  const [user, setUser] = useState()
  const [repositories, setRepositories] = useState()
  const [languages, setLanguages] = useState()
  const [currentLanguage, setCurrentLanguage] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      const [userResponse, repositoriesResponse] = await Promise.all([
        getUser(login),
        getRepos(login)
      ]);
      setUser(userResponse.data)
      setRepositories(repositoriesResponse.data)

      setLanguages(getLangFrom(repositoriesResponse.data))

      setLoading(false)
    }
    loadData();
  }, [])





  const onFilterClick = (language) => {
      setCurrentLanguage(language)
  }


  if(loading){
    return(
      <Loading>
        <Logo src={logo} alt='Logo' />
        <LoadingTitle>Carregando...</LoadingTitle>
      </Loading>
    );
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
