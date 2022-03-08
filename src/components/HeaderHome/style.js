import styled from "styled-components";

export const ContainerHeader = styled.div`
  width: 100%;
  height: 120px;
  padding: 20px;
  background: var(--color-primary-50);
  display: flex;
  align-items: center;
  justify-content: space-around;

  > h1 {
    color: white;
    font-family: monospace;
    font-size: 40px;
  }
`;

export const ContainerNavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 640px;

  div {
    display: flex;
    justify-content: space-between;
    width: 430px;

    > div > button {
      background-color: var(--background);
      color: var(--color-primary-50);
      font-weight: bold;
      transition: box-shadow 0.5s;
    }
    > div > button:hover {
      filter: brightness(0.9);
      box-shadow: 0px 0px 8px 4px #353333b8;
    }
  }
`;

export const ContainerLink = styled.section`
  display: flex;

  > a {
    background-color: var(--background);
    border-radius: 29px;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    transition: background 0.5s;

    > svg {
      color: var(--color-primary-50);
      width: 45px;
    }
  }
  > a:hover {
    background-color: var(--color-primary-50);
    > svg {
      color: #fff;
    }
  }
  > p {
    position: relative;
    bottom: 12px;
    left: -15px;
    background: var(--negative);
    color: #fff;
    width: 25px;
    height: 25px;
    border-radius: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
