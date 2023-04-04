import React, {useState} from "react";
import { MdSearch } from 'react-icons/md';
import logo from "../../assets/images/github-logo.svg";
import { Container, Logo, Title, Form, Input, Button} from "./style";


function Main(){

  const [login, setLogin] = useState("")

  return (
    <Container className="Container">
      <Logo src={logo} alt="Logo GitHub" />
      <Title>API GitHub</Title>
      <Form>
        <Input
          placeholder="Usuário"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <Button to={`/${login}/repositories`}>
          <MdSearch size={40} />
        </Button>
      </Form>
    </Container>
  );
};

export default Main;
