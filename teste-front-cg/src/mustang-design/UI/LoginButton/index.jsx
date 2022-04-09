import { StyledIcon } from "../../core/Navbar/Navbar";
import { ButtonText, LoginBtn } from "./LoginButton";

function LoginButton() {
  return (
    <LoginBtn>
      <ButtonText>Entrar</ButtonText>
      <StyledIcon icon={"ant-design:user-outlined"}></StyledIcon>
    </LoginBtn>
  );
}

export default LoginButton;
