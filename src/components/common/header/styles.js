import styled from "styled-components";

export const Container = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.color.primary};
  padding: 30px;

  .logo {
    margin: 5px 40px 0 0;
  }
`;

export const SearchWrapper = styled.div`
  width: 400px;
`;
