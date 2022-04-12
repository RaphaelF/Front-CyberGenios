import { ButtonContainer, ButtonLink } from "./Button";

function Button({
  type,
  url = "#",
  radius,
  click = null,
  children,
  color,
  newPage = false,
}) {
  function handleClick(event) {
    if (click !== null) {
      event.preventDefault();
      event.stopPropagation();
      click();
    }
  }
  return (
    <ButtonLink color={color} href={url} target={newPage ? "_blank" : "_self"}>
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
