import { GlobalStyle } from "./components/Global.jsx";
import Home from "./components/Home";
import { Tabela } from "./components/Tabela/index.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BarraDeNavegacao from "./components/BarraDeNavegacao/index.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <BarraDeNavegacao />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/tabela">
            <Tabela />
          </Route>
        </Switch>
      </Router>
      <Tabela />
    </>
  );
}

export default App;
