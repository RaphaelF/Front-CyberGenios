import styled from "styled-components";
import { primaryColor, whiteColor } from "../UI/variables";
import { Icon } from "@iconify/react";
import { ReactComponent as Logo } from "../../../assets/logo.svg";

export const NavBar = styled.ul`
  display: flex;
  position: fixed;
  top: 0px;
  left: 0px;
  flex-direction: row;
  align-items: center;
  list-style: none;
  width: 100%;
  height: 5rem;

  @media screen and (max-width: 425px) {
    flex-direction: column;
    align-items: flex-start;
    border-radius: 0px 24px 24px 0px;
    width: 75%;
    height: 100%;
    color: ${primaryColor};
    background: ${whiteColor};
  }
`;

const LogoContainer = styled.span`
  margin-top: 5px;
  margin-left: 1.563rem;
  @media screen and (max-width: 425px) {
    margin-left: 1.2rem;
  }
`;

export const StyledLogo = () => {
  return (
    <LogoContainer>
      <Logo></Logo>
    </LogoContainer>
  );
};

export const NavItemContainer = styled.li`
  display: flex;
  align-items: center;
  text-align: center;
`;

const NavLink = styled.a`
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

const LoginBtn = styled.button`
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

export const MenuBtn = styled(LoginBtn)`
  display: none;
  position: absolute;
  top: 0.8rem;
  left: 0.625rem;
  width: fit-content;
  height: fit-content;
  @media screen and (max-width: 425px) {
    display: block;
  }
`;

const ButtonText = styled.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  color: ${whiteColor};
`;

export const StyledIcon = styled(Icon)`
  width: 2rem;
  height: 2rem;
  color: ${whiteColor};
`;

export const NavItem = ({ Text, url }) => {
  return (
    <NavItemContainer>
      <NavLink href={url}>{Text}</NavLink>
    </NavItemContainer>
  );
};

export const LoginButton = () => {
  return (
    <LoginBtn>
      <ButtonText>Entrar</ButtonText>
      <StyledIcon icon={"ant-design:user-outlined"}></StyledIcon>
    </LoginBtn>
  );
};

export const MenuButton = () => {
  return (
    <MenuBtn>
      <StyledIcon
        style={{ width: "2.625rem", height: "2.625rem" }}
        icon={"ant-design:menu-outlined"}
      ></StyledIcon>
    </MenuBtn>
  );
};
