import { useState } from "react";
import { GlobalStyle } from "./components/Global.jsx";
import Home from "./components/Home";
import { Tabela } from "./components/Tabela";

import BarraDeNavegacao from "./components/BarraDeNavegacao";

function App() {
  const Router = () => {
    const location = window.location.pathname;
    if (location === "/tabela") {
      return <Tabela />;
    } else {
      return <Home />;
    }
  };
  return (
    <>
      <GlobalStyle />

      <BarraDeNavegacao />
      {Router()}
    </>
  );
}

export default App;
