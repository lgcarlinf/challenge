import styled from "styled-components";

export const ListDogsStyled = styled.div`
  h1 {
    text-align: center;
  }

  .dogLinks {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  a:first-letter {
    text-transform: uppercase;
  }
`;
