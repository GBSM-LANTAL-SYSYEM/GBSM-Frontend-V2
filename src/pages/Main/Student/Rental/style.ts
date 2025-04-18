import { colors } from "@/styles";
import styled from "styled-components";

export const TopCont = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 50px;
  margin-left: 40px;
`;

export const Parent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  height: auto;
  padding: 40px 0;
`;

export const Header = styled.header`
  & > h4 {
    font-size: 1.4rem;
  }

  & > img {
    width: 150px;
    margin-top: 20px;
  }
`

export const BtnCont = styled.div`

  & > button {
    width: 300px;
    padding: 20px;
    border-radius: 38px;
    border: none;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    margin: 0 20px;
  }

  .prev {
    background-color: #D9D9D9;
    color: #707070;
  }

  .next {
    background-color: ${colors.primary};
    color: ${colors.white};

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      background-color: ${colors.primary};
    }
  }
`