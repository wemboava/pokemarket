import React, { useState, useEffect } from "react";

import api from "../../services/api";

import Header from "../../components/common/header";
import { usePokemonType } from "../../hooks/pokemonType";
import { Container, Content } from "./styles";
import TypesList from "../../components/common/typesList";
import PokemonsDetail from "../../components/pokemon/detail";
import Cart from "../../components/cart";

const Detail = () => {
  const pokemonType = usePokemonType();
  console.log("pokemonType", pokemonType);

  const [pokemon, setPokemon] = useState([]);

  const randomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    api.get("/pokemon/1").then((result) => {
      const { data } = result;

      console.log(data);

      const formatedPokemons = { ...data, price: randomInteger(300, 999) };

      setPokemon(formatedPokemons);
    });
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <TypesList />
        <div style={{ display: "flex" }}>
          <PokemonsDetail pokemon={pokemon} />
          <Cart />
        </div>
      </Content>
    </Container>
  );
};
export default Detail;
