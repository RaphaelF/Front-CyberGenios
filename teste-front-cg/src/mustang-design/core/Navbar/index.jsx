import React, { useState } from "react";
import { NavBar, MenuButton, NavClose } from "./Navbar";

const Navbar = ({ children, color }) => {
  const [ativo, setAtivo] = useState(false);

  return (
    <>
      <MenuButton ativo={ativo} setAtivo={setAtivo} />
      <NavBar ativo={ativo} color={color}>
        {children}
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
