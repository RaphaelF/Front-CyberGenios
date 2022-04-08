import React, { useState } from "react";
import {
  NavBar,
  LoginButton,
  StyledLogo,
  MenuButton,
  NavClose,
} from "./Navbar";
import Navitem from "../Navitem";

const Navbar = () => {
  const [ativo, setAtivo] = useState(false);

  return (
    <>
      <MenuButton ativo={ativo} setAtivo={setAtivo} />
      <NavBar ativo={ativo}>
        <StyledLogo />
        <Navitem Text={"Home"} url={"#"}>
          Home
        </Navitem>
        <Navitem Text={"Sobre"} url={"#"}>
          Sobre
        </Navitem>
        <Navitem Text={"Tabela"} url={"#"}>
          Tabela
        </Navitem>
        <Navitem Text={"Fale conosco"} url={"#"}>
          Fale conosco
        </Navitem>
        <LoginButton></LoginButton>
      </NavBar>
      <NavClose
        ativo={ativo}
        onClick={() => {
          setAtivo(!ativo);
        }}
      />
    </>
  );
};

export default Navbar;
