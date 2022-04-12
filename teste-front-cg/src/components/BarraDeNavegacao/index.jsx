import Navbar from "../../mustang-design/core/Navbar";
import Navitem from "../../mustang-design/core/Navitem";
import LoginButton from "../../mustang-design/UI/LoginButton";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Logo2 } from "../../assets/logo2.svg";
import { Link } from "react-router-dom";
import StyledLogo from "../../mustang-design/UI/StyledLogo";
import { primaryColor } from "../../mustang-design/core/UI/variables";

function BarraDeNavegacao() {
  return (
    <Navbar
      color={
        window.location.hrefcolor.includes("/tabela")
          ? primaryColor
          : "transparent"
      }
    >
      <StyledLogo>{window.innerWidth > 425 ? <Logo /> : <Logo2 />}</StyledLogo>

      <Link to="/">
        <Navitem Text={"Home"} url={"#"}>
          Home
        </Navitem>
      </Link>

      <Link to="#">
        <Navitem Text={"Sobre"} url={"#"}>
          Sobre
        </Navitem>
      </Link>
      <Link to="tabela">
        <Navitem Text={"Tabela"} url={"#"}>
          Tabela
        </Navitem>
      </Link>
      <Link to="#">
        <Navitem Text={"Fale conosco"} url={"#"}>
          Fale conosco
        </Navitem>
      </Link>

      <LoginButton></LoginButton>
    </Navbar>
  );
}

export default BarraDeNavegacao;
