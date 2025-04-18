import styled from "styled-components";

export const TextareaField = styled.div`
  margin-top: 20px;
`;

export const TextareaCont = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  
  & > span {
    font-size: 24px;
    font-weight: 400;
    color: #666666;
  }

  & > textarea {
    margin-top: 10px;
    padding: 20px;
    width: 600px;
    height: 250px;
    border: 2px solid #DBDBDB;
    border-radius: 3px;
    font-size: 20px;
    transition: border 0.1s ease-in;
    resize: none;

    &::placeholder {
      color: #C3C3C3;
    }

    &:focus {
      border: 2px solid #48A988;
      outline: none;
    }
  }
`