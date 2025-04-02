import styled from "styled-components";
import { ToastContainer as ReactToastContainer } from "react-toastify";
import { colors } from "@/styles";

export const ToastCont = styled(ReactToastContainer)`
  .Toastify__toast {
    width: 21rem;
    background-color: ${colors.white};
    color: ${colors.black};
    border-radius: 8px;
    padding: 10px;
    font-size: 15spx;
    font-weight: 400;
    display: flex;
    align-items: center;
  }

  .Toastify__progress-bar {
    height: 5px;
    border-radius: 2px;
  }

   .Toastify__toast--success .Toastify__progress-bar {
    background-color: ${colors.green_100} !important;
  }

  .Toastify__toast--error .Toastify__progress-bar {
    background-color: ${colors.red_200} !important;
  }

  .Toastify__toast--info .Toastify__progress-bar {
    background-color: ${colors.green_200} !important; 
  }
`;