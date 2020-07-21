import React from "react";
import Header from "../../components/common/header";
import { usePokemonType } from "../../hooks/pokemonType";
import { Container, Content } from "./styles";
import TypesList from "../../components/common/typesList";

const Home = () => {
  const pokemonType = usePokemonType();
  console.log("pokemonType", pokemonType);
  return (
    <Container>
      <Header />
      <Content>
        <TypesList />
        <div />
      </Content>
    </Container>
  );
};
export default Home;
