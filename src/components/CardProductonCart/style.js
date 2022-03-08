import styled from "styled-components";

export const Card = styled.div`
  width: 425px;
  height: 450px;
  margin: 25px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: var(--color-primary-50) solid 2px;
  padding: 25px;
  border-radius: 7px;
  transition: box-shadow 0.5s;

  > img {
    width: 200px;
  }
  > div {
    width: 100%;

    > h3 {
      background: var(--color-primary-50);
      width: 150px;
      height: 30px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border-radius: 7px;
      padding: 18px;
      color: #fff;
    }
  }

  &:hover {
    border: var(--color-primary-50) solid 3px;
    box-shadow: 0px 0px 8px 4px #353333b8;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  > div > button {
    width: 50px;
    height: 50px;
    border: transparent;
    border-radius: 50px;
    background: var(--negative);
    color: #fff;
    transition: background 1s;
    font-weight: bold;
  }

  > div > button:hover {
    background: #fff;
    color: var(--negative);
  }

  > span {
    padding: 15px;
    font-weight: bold;
    font-size: 15px;
  }
`;
