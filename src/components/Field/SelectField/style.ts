import styled from "styled-components";

export const SelectCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;

  & > span {
    font-size: 24px;
    font-weight: 400;
    color: #666666;
  }

  & > select {
    width: 450px;
    height: 40px;
    border: none;
    border-bottom: 2px solid #DBDBDB;
    font-size: 20px;
    outline: none;
    margin-top: 10px;
    transition: border-bottom 0.1s ease-in;

    &:focus {
      border-bottom: 2px solid #48A988;
    }
  }
`;