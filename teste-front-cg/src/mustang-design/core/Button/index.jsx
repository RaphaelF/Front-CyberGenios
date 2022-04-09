import { ButtonContainer } from "./Button";

function Button({ type, url = "#", click = null, children }) {
  function handleClick(event) {
    if (click !== null) {
      event.preventDefault();
      event.stopPropagation();
      click();
    }
  }
  return (
    <a href={url}>
      <ButtonContainer
        type={type}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        {children}
      </ButtonContainer>
    </a>
  );
}

export default Button;
