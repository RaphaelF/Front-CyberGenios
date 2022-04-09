import BarraDeNavegacao from "./components/BarraDeNavegacao.jsx";
import { GlobalStyle } from "./components/Global.tsx";
import Home from "./components/Home";

function App() {
  return (
    <>
      <GlobalStyle />
      <BarraDeNavegacao />
      <Home />
    </>
  );
}

export default App;
