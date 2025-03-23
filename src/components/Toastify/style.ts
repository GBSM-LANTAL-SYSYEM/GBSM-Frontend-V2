import styled from "styled-components";
import { ToastContainer as ReactToastContainer } from "react-toastify";

export const ToastCont = styled(ReactToastContainer)`
  .Toastify__toast {
    width: 21rem;
    background-color: #fff;
    color: #000;
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
    background-color: rgb(76, 175, 80) !important;
  }

  .Toastify__toast--error .Toastify__progress-bar {
    background-color: rgb(220, 53, 69) !important;
  }

  .Toastify__toast--info .Toastify__progress-bar {
    background-color: rgb(0, 134, 107) !important; 
  }
`;