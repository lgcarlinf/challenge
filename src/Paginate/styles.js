import styled from "styled-components";

export const PaginateStyled = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;

  a {
    display: block;
    text-decoration: none;
    border: 1px solid #ccc;
    padding: 5px 10px;
    color: #333;
  }

  a:first-child {
    border-radius: 5px 0 0 5px;
  }

  a:last-child {
    border-radius: 0 5px 5px 0;
  }

  a:hover {
    background-color: #ccc;
  }
`;
