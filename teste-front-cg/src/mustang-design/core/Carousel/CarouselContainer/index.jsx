import React, { useRef } from "react";

import {
  CarouselButton,
  CarouselInner,
  CarouselOutter,
} from "./CarouselContainer.jsx";

function CarouselContainer({ children }) {
  const carousel = useRef(null);

  function handleClick(direction) {
    if (direction === "right") {
      carousel.current.scrollLeft += carousel.current.offsetWidth;
    } else {
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
  }

  return (
    <CarouselOutter>
      <CarouselInner ref={carousel}>
        {children}
        <CarouselButton direction={"right"} click={handleClick} />
        <CarouselButton direction={"left"} click={handleClick} />
      </CarouselInner>
    </CarouselOutter>
  );
}

export default CarouselContainer;
