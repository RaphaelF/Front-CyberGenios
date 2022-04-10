import Navbar from "../../mustang-design/core/Navbar";
import Navitem from "../../mustang-design/core/Navitem";
import LoginButton from "../../mustang-design/UI/LoginButton";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Logo2 } from "../../assets/logo2.svg";
import StyledLogo from "../../mustang-design/UI/StyledLogo";

function BarraDeNavegacao({ color }) {
  return (
    <Navbar color={color}>
      <StyledLogo>{window.innerWidth > 425 ? <Logo /> : <Logo2 />}</StyledLogo>
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
    </Navbar>
  );
}

export default BarraDeNavegacao;
