import { GlobalStyle } from "./components/Global.tsx";
import {
  NavBar,
  NavItem,
  LoginButton,
  StyledLogo,
  MenuButton,
} from "./mustang-design/core/Navbar/Navbar";

function App() {
  return (
    <>
      <GlobalStyle />
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
      <div>HEWWO THERR</div>
    </>
  );
}

export default App;
