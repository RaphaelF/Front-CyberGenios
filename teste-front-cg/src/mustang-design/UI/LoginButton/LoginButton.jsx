import styled from "styled-components";
import { whiteColor } from "../../core/UI/variables";

export const LoginBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 1.1rem;
  justify-content: space-between;
  width: 110px;
  border: none;
  cursor: pointer;
  background: transparent;
  :hover,
  :focus,
  :active {
    animation: animate 0.3s normal ease;
  }
  :hover {
    outline-style: inset;
    outline-color: ${whiteColor};
  }
  @keyframes animate {
    0%,
    100% {
      outline: transparent;
      transform: scale(1);
    }
    50% {
      outline-style: inset;
      outline-color: ${whiteColor};
      transform: scale(1.2);
    }
  }
  @media screen and (max-width: 425px) {
    display: none;
  }
`;

export const ButtonText = styled.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  color: ${whiteColor};
`;
