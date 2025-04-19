import styled from "styled-components";

export const Tooltip = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  .tooltiptext {
    visibility: hidden;
    width: 150px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    text-align: center;
    border-radius: 5px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    bottom: 100%;
    left: 50%;
    font-size: 12px;
    word-wrap: break-word;
    white-space: normal;
    font-weight: 500;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s;
    margin-top: 8px;
  }

  &:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
`;