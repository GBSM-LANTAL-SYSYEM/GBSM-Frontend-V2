import { colors } from "@/styles";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SignupInputCont = styled.div`
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5vh;
  width: 55%;
`;

export const SignupInputWrap = styled.form`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  min-width: 0px;
  padding: 0px;
  border: 0px;
  vertical-align: top;
  margin: 8px 8px 8px 0px;
  width: 100%;
`;

export const InputCont = styled.div`
  position: relative;
  margin-bottom: 30px;
`;

export const SignupInput = styled.input`
  width: 100%;
  padding: 15px 25px;
  font-size: 13px;
  color: ${colors.black};
  border: 1px ${colors.gray_100} solid;
  border-radius: 5px;
  outline: transparent 1px solid;
  box-sizing: border-box;
`;

export const PasswordToggleButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;

  .show_logo {
    font-size: 20px;
    color: ${colors.gray_300};
  }
`;

export const SignupIssueText = styled.div`
  font-size: 12px;
  height: 18px;
  margin-left: 4px;
  min-width: 400px;
  width: 95%;
  margin-top: 10px;

  .issue_logo {
    color: ${colors.red_100};
    margin-bottom: -2.5px;
    font-size: 14px;
  }

  span {
    color: ${colors.gray_400};
    margin-left: 3px;
  }
`;

export const SignupBtn = styled.button`
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

export const SignUpBtn = styled(NavLink)`
  color: ${colors.gray_200};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: Noto Sans KR, sans-serif;
  font-size: 14px;
  font-weight: 700;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  width: 100%;

  :hover {
    text-decoration: underline;
  }
`;