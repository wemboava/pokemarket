import React from "react";

import { PokemonTypeProvider } from "./pokemonType";

const AppProvider = ({ children }) => {
  return <PokemonTypeProvider>{children}</PokemonTypeProvider>;
};

export default AppProvider;
