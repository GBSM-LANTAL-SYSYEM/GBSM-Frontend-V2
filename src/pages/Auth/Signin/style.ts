import styled from "styled-components";

import { SchoolFullImg } from "@/assets";
import { colors } from "@/styles";

export const Container = styled.div`
  overflow: hidden;
  height: 94vh;
  padding: 20px;
`;

export const TopCont = styled.div`
  min-width: 1400px;
  font-family: "IBM Plex Sans KR", sans-serif;
`;

export const Parent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const MainCont = styled.div`
  margin: 5vh auto 5rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0;
  width: 70%;
  height: 74%;
  border-radius: 8px;
  transition: all 0.7s;
  animation: fadein 1s ease-in-out;
  background-color: ${colors.white};
  min-height: 35rem;
  min-width: 50rem;
  max-height: 60rem;
  max-width: 100rem;

  @keyframes fadein {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }

    100% {
      opacity: 1;
      transform: none;
    }
  }
`;

export const LoginCont = styled.div`
  display: table;
  float: left;
  height: 100%;
  width: 65%;
`;

export const LoginSubCont = styled.div`
  display: table-cell;
  height: auto;
  vertical-align: middle;
  width: auto;
`;

export const LoginTitle = styled.div`
  font-family: Noto Sans KR, sans-serif;
  font-size: 1.2rem;
  font-weight: 480;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 22rem;
`;

export const LoginLogoCont = styled.div`
  height: 3.2rem;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9rem;

  .gbsw_new_logo {
    width: 4rem;
    margin-left: 20px;
  }
`;

export const LoginTextCont = styled.div`
  color: ${colors.black};
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 3rem;
  text-align: center;
  font-weight: bold;
  margin: 15px;

  .tag_bottom {
    color: ${colors.gray_200};
  }
`;

export const RentalStauts = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${SchoolFullImg});
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0 7px 7px 0;
  box-shadow: 0 2px 8px 0 rgba(99, 99, 99, 0.2);
  display: table;
  float: left;
  height: 100%;
  width: 35%;
`;

export const LoginBtn = styled.button`
  background-color: ${colors.primary};
  border: none;
  border-radius: 5px;
  color: ${colors.white};
  cursor: pointer;
  display: block;
  font-family: Noto Sans KR, sans-serif;
  font-size: 18px;
  font-weight: 700;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  transition: background-color 0.12s ease-in;

  &:hover {
    background-color: ${colors.primary_hover};
  }
`;
