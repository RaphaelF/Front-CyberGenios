import Navbar from "../../mustang-design/core/Navbar";
import Navitem from "../../mustang-design/core/Navitem";
import LoginButton from "../../mustang-design/UI/LoginButton";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Logo2 } from "../../assets/logo2.svg";
import StyledLogo from "../../mustang-design/UI/StyledLogo";
import { primaryColor } from "../../mustang-design/core/UI/variables";

function BarraDeNavegacao() {
  const location = window.location.pathname;
  return (
    <Navbar color={location === "/tabela" ? primaryColor : "transparent"}>
      <StyledLogo>{window.innerWidth > 425 ? <Logo /> : <Logo2 />}</StyledLogo>

      <Navitem Text={"Home"} url={"/"}>
        Home
      </Navitem>

      <Navitem Text={"Sobre"} url={"#"}>
        Sobre
      </Navitem>

      <Navitem Text={"Tabela"} url={"/tabela"}>
        Tabela
      </Navitem>

      <Navitem Text={"Fale conosco"} url={"#"}>
        Fale conosco
      </Navitem>

      <LoginButton></LoginButton>
    </Navbar>
  );
}

export default BarraDeNavegacao;
