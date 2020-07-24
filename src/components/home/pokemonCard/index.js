import React from "react";
import formatValue from "../../../utils/formatValue";

import { Container } from "./styles";

const PokemonCard = ({ pokemon }) => {
  return (
    <Container>
      <h2 className="name">{pokemon.name}</h2>
      <img
        className="image"
        src={require(`../../../assets/images/pokemons/${
          pokemon.id <= 10090 ? pokemon.id : 0
        }.png`)}
        alt="Imagem do Bolbasaur"
      />
      <div className="price-info">
        <span className="price-info__value">{formatValue(pokemon.price)}</span>
        <span className="price-info__installment">
          12x de {formatValue(pokemon.price / 12)} s/ juros
        </span>
      </div>
    </Container>
  );
};
export default PokemonCard;
