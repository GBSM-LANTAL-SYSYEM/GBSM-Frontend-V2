import styled from "styled-components";

export const InputCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 70px;

  & > span {
    font-size: 24px;
    font-weight: 400;
    color: #666666;
  }

  & > input {
    width: 600px;
    height: 50px;
    border: none;
    border-bottom: 2px solid #DBDBDB;
    font-size: 20px;
    outline: none;
    margin-top: 10px;
    padding: 0 20px 0 0;
    transition: border-bottom 0.1s ease-in;

    &::placeholder {
      color: #C3C3C3;
    }

    &:focus {
      border-bottom: 2px solid #48A988;
    }
  }

  & > input[type="date"] {
    width: 450px;
    height: 40px;
    border: none;
    border-bottom: 2px solid #DBDBDB;
    font-size: 20px;
    outline: none;
    margin-top: 10px;
    position: relative;

    &::-webkit-calendar-picker-indicator {
      position: absolute;
      right: 0; 
      cursor: pointer;
      filter: invert(48%) sepia(13%) saturate(3207%) hue-rotate(130deg) brightness(95%) contrast(80%); 
      padding: 0;
      margin: 0;
      background-size: contain;
    }
    
    &:focus {
      border-bottom: 2px solid #48A988;
    }

    &:placeholder-shown {
      display: none;
    }
  }
`;