import React from "react";
import PokemonCard from "../pokemonCard";
import { Container, List } from "./styles";

const PokemonList = ({ pokemons }) => {
  return (
    <Container>
      <List>
        {pokemons.map((poke) => (
          <PokemonCard pokemon={poke} />
        ))}
      </List>
    </Container>
  );
};
export default PokemonList;
