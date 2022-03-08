import styled from "styled-components";

export const ContainerCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  > header {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: var(--color-primary-50);
  }
  header > h1 {
    color: white;
    font-family: monospace;
    font-size: 40px;
  }
  header > a {
    width: 100px;
    background: var(--grey-2);
    height: 35px;
    border-radius: 5px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: box-shadow 0.5s;
  }
  header > a:hover {
    box-shadow: 0px 0px 5px 0px black;
  }
  > div {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 80px;
  }

  > div > ul {
    width: 685px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-direction: row;
  }
`;
