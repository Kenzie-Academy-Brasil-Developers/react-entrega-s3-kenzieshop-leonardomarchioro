import styled from "styled-components";

export const ContainerOrder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 200px;
  width: 380px;
  padding: 10px;
  box-shadow: 0px 0px 13px 0px black;
  border-radius: 8px;
  border: var(--color-primary-50) 2px solid;
  margin: 20px;

  h1 {
    font-size: 20px;
  }
  > div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  > div > button {
    width: 100%;
    margin: 5px;
    background: var(--sucess);
    color: #fff;
    transition: box-shadow 0.5s;
  }
  > div > button:hover {
    filter: brightness(0.95);
    box-shadow: 0px 0px 5px 0px black;
  }
  @media (max-width: 410px) {
    width: 300px;
  }
`;
