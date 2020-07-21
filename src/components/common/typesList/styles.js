import styled from "styled-components";
import { darken } from "polished";

import pokeball from "../../../assets/images/pokeball-bg.png";

export const Container = styled.div``;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 10px 0 10px 20px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.li`
  width: 150px;
  background: ${(props) =>
    props.withBgImage
      ? `${props.bgColor} url(${pokeball}) no-repeat`
      : props.bgColor};
  background-position: right;
  background-size: ${(props) => (props.withBgImage ? "75px" : "100%")};
  color: #fff;
  font-weight: bold;
  padding: 15px;
  margin: 10px 20px 10px 0;
  border-radius: 12px;
  box-shadow: 0 0px 10px 0 ${(props) => props.bgColor};
  transition: all 0.3s;
  &:hover {
    background: ${(props) =>
      props.withBgImage
        ? `${darken(0.1, props.bgColor)} url(${pokeball}) no-repeat`
        : props.bgColor};
    background-position: right;
    background-size: ${(props) => (props.withBgImage ? "75px" : "100%")};
    box-shadow: 0 0px 20px 0 ${(props) => props.bgColor};
  }
`;
