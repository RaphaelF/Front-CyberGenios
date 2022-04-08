import styled from "styled-components";
import { primaryColor, whiteColor } from "../UI/variables";

export const NavItemContainer = styled.li`
  display: flex;
  align-items: center;
  text-align: center;
`;

export const NavLink = styled.a`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  margin: 0 8rem;
  color: ${whiteColor};
  :hover,
  :focus,
  :active {
    animation: animate 0.15s normal ease;
  }
  @keyframes animate {
    0%,
    100% {
      outline: transparent;
      transform: scale(1);
    }
    50% {
      outline-color: ${whiteColor};
      transform: scale(1.2);
    }
  }
  :hover {
    outline-style: inset;
    outline-color: ${whiteColor};
  }
  @media screen and (max-width: 425px) {
    color: ${primaryColor};
    margin: 1rem 2rem;
    :hover,
    :focus,
    :active {
      outline: 1px inset ${primaryColor};
      border-bottom: 2px solid ${primaryColor};
      animation: animate2 0.15s normal ease;
    }

    @keyframes animate2 {
      0%,
      100% {
        outline: transparent;
        transform: scale(1);
      }
      50% {
        outline: 1px inset ${primaryColor};
        transform: scale(1.2);
      }
    }
  }
`;
