import React from "react";
import { ThemeProvider } from "styled-components";

import { PokemonTypeProvider } from "./pokemonType";
import { useTheme } from "./theme";

const AppProvider = ({ children }) => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={{ color: theme.color }}>
      <PokemonTypeProvider>{children}</PokemonTypeProvider>;
    </ThemeProvider>
  );
};

export default AppProvider;
