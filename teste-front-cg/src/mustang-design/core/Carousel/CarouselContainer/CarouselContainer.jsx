import styled from "styled-components";
import { primaryColor, whiteColor } from "../../UI/variables";
import { Icon } from "@iconify/react";

export const CarouselOutter = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10rem;
`;

export const CarouselInner = styled.div`
  display: flex;
  flex-direction: row;
  width: 75%;
  height: fit-content;
  overflow: auto;
  overflow-x: auto;
  padding: 3rem;
  background: ${whiteColor};
  scroll-behavior: auto;

  @media screen and (max-width: 425px) {
    width: 100%;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  ::-webkit-scrollbar {
    height: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${primaryColor};
  }
  ::-webkit-scrollbar-track {
    background: red;
  }
`;
export const CarouselBtn = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  color: ${primaryColor};
  border: none;
  top: 50%;
  right: ${(props) => props.direction === "right" && "0.5rem"};
  left: ${(props) => props.direction === "left" && "0.5rem"};

  @media screen and (max-width: 425px) {
    display: none;
  }

  cursor: pointer;
  :hover,
  :focus,
  :active {
    animation: animate 0.3s normal ease;
  }
  :hover {
    outline-style: inset;
    outline-color: ${primaryColor};
  }
  @keyframes animate {
    0%,
    100% {
      outline: transparent;
      transform: scale(1);
    }
    50% {
      outline-style: inset;
      outline-color: ${primaryColor};
      transform: scale(1.2);
    }
  }
`;

export const CarouselButton = ({ direction, click }) => {
  const dir = direction;

  function handleClick(event) {
    event.preventDefault();
    event.stopPropagation();
    click(dir);
  }
  function renderIcon() {
    if (direction === "right") {
      return (
        <Icon
          style={{ width: "2.5rem", height: "2.5rem" }}
          icon="ep:arrow-right-bold"
        />
      );
    } else {
      return (
        <Icon
          style={{ width: "2.5rem", height: "2.5rem" }}
          icon="ep:arrow-left-bold"
        />
      );
    }
  }

  return (
    <CarouselBtn direction={direction} onClick={(e) => handleClick(e)}>
      {renderIcon()}
    </CarouselBtn>
  );
};
