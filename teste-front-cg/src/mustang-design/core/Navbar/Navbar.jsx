import styled from "styled-components";
import { primaryColor, whiteColor } from "../UI/variables";
import { Icon } from "@iconify/react";
import { LoginBtn } from "../../UI/LoginButton/LoginButton";

export const NavBar = styled.ul`
  display: flex;
  position: absolute;
  top: 0px;
  left: 0px;
  flex-direction: row;
  align-items: center;
  list-style: none;
  width: 100%;
  height: 5rem;
  transition: 0.2s;
  z-index: 2;
  background: ${(props) => props.color};

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

export const StyledIcon = styled(Icon)`
  width: 2rem;
  height: 2rem;
  color: ${whiteColor};
`;

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
