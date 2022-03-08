import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 100px;
    width: 900px;
  }

  @media (max-width: 900px) {
    ul {
      width: 400px;
      overflow: scroll;
      height: 500px;
    }
  }
  @media (max-width: 410px) {
    ul {
      width: 300px;
    }
  }
`;
