import React, { useState, useEffect } from "react";

import api from "../../services/api";

import Header from "../../components/common/header";
import { usePokemonType } from "../../hooks/pokemonType";
import { Container, Content } from "./styles";
import TypesList from "../../components/common/typesList";
import PokemonsList from "../../components/home/pokemonList";
import Cart from "../../components/cart";

const Home = () => {
  const pokemonType = usePokemonType();
  console.log("pokemonType", pokemonType);

  const [pokemons, setPokemons] = useState([]);

  const randomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    api.get("/type/1").then((result) => {
      const { data } = result;
      const formatedPokemons = data.pokemon.map((pokemon) => ({
        ...pokemon.pokemon,
        id: pokemon.pokemon.url.split("/")[6],
        price: randomInteger(300, 999),
      }));

      setPokemons(formatedPokemons);
    });
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <TypesList />
        <div style={{ display: "flex" }}>
          <PokemonsList pokemons={pokemons} />
          <Cart />
        </div>
      </Content>
    </Container>
  );
};
export default Home;
