import styled from "styled-components";

export const Container = styled.li`
  width: 47%;
  background: ${(props) => props.theme.color.primary};
  box-shadow: 0px 4px 19px ${(props) => props.theme.color.primary};
  border-radius: 10px;
  padding: 20px 15px 15px 15px;
  margin-bottom: 20px;
  color: #fff;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 31%;
  }
  @media (min-width: 968px) {
    width: 23%;
    padding: 25px 15px 15px 15px;
  }
  @media (min-width: 1124px) {
    width: 18.5%;
  }
  .name {
    text-align: center;
    font-size: 1.3em;
    text-transform: capitalize;
  }
  .image {
    width: 100%;
    margin: -5px 0px -10px 0px;
  }
  .price-info {
    display: flex;
    flex-direction: column;
    &__value {
      font-weight: 700;
    }
    &__installment {
      font-size: 0.7em;
    }
  }
`;
