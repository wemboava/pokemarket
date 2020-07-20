import React from "react";
import { Container, SearchWrapper } from "./styles";
import SearchBar from "../searchBar";

const Header = () => {
  return (
    <Container>
      <h2 className="logo poke-font">PokeMarket</h2>
      <SearchWrapper>
        <SearchBar />
      </SearchWrapper>
    </Container>
  );
};

export default Header;
