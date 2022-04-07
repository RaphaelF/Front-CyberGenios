import React, { useState } from "react";
import { NavBar, NavItem, LoginButton, StyledLogo, MenuButton } from "./Navbar";

const Navbar = () => {
  const [ativo, setAtivo] = useState();
  return (
    <NavBar>
      <MenuButton />
      <StyledLogo />
      <NavItem Text={"Home"} url={"#"}>
        Home
      </NavItem>
      <NavItem Text={"Sobre"} url={"#"}>
        Sobre
      </NavItem>
      <NavItem Text={"Tabela"} url={"#"}>
        Tabela
      </NavItem>
      <NavItem Text={"Fale conosco"} url={"#"}>
        Fale conosco
      </NavItem>
      <LoginButton></LoginButton>
    </NavBar>
  );
};

export default Navbar;
