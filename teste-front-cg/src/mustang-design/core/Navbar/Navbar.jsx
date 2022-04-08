import styled from "styled-components";
import { primaryColor, whiteColor } from "../UI/variables";
import { Icon } from "@iconify/react";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import { ReactComponent as Logo2 } from "../../../assets/logo2.svg";

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
  transition: 0.2s;
  z-index: 2;

  @media screen and (max-width: 425px) {
    flex-direction: column;
    align-items: flex-start;
    border-radius: 0px 24px 24px 0px;
    width: 75%;
    height: 100%;
    color: ${primaryColor};

    background: white;
    transform: ${(props) =>
      props.ativo ? "translateX(0px)" : "translateX(-1000px)"};
  }
`;

const LogoContainer = styled.span`
  margin-top: 5px;
  margin-left: 1.563rem;
  background: transparent;
  @media screen and (max-width: 425px) {
    margin-left: 1.2rem;
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
  top: 1.3rem;
  left: 0.625rem;
  width: fit-content;
  z-index: 2;
  height: fit-content;
  @media screen and (max-width: 425px) {
    display: block;
    transform: ${(props) =>
      !props.ativo ? "translateX(0px)" : "translateX(-1000px)"};
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

export const StyledLogo = () => {
  return (
    <LogoContainer>
      {window.innerWidth > 425 ? <Logo /> : <Logo2 />}
    </LogoContainer>
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

export const MenuButton = ({ ativo, setAtivo }) => {
  const handleClick = () => {
    setAtivo(!ativo);
  };
  return (
    <MenuBtn
      onClick={() => {
        handleClick();
      }}
    >
      <StyledIcon
        style={{ width: "2.625rem", height: "2.625rem" }}
        icon={"ant-design:menu-outlined"}
      ></StyledIcon>
    </MenuBtn>
  );
};

export const NavClose = styled.div`
  display: ${(props) => (props.ativo ? "block" : "none")};
  position: absolute;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  @media screen and (min-width: 425px) {
    display: none;
  }
`;
