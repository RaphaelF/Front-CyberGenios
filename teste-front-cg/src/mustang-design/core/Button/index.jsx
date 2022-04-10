import { ButtonContainer, ButtonLink } from "./Button";

function Button({ type, url = "#", radius, click = null, children, color }) {
  function handleClick(event) {
    if (click !== null) {
      event.preventDefault();
      event.stopPropagation();
      click();
    }
  }
  return (
    <ButtonLink color={color} href={url} target="_blank">
      <ButtonContainer
        color={color}
        radius={radius}
        type={type}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        {children}
      </ButtonContainer>
    </ButtonLink>
  );
}

export default Button;
