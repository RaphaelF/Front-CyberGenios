import React, { useEffect, useState } from "react";
import bkg from "../../assets/background.png";

import { ElipseFrame } from "../../mustang-design/core/Frame/Frames";

import StyledImage from "../../mustang-design/core/Image";
import CarouselContainer from "../../mustang-design/core/Carousel/CarouselContainer";
import CarouselItem from "../../mustang-design/core/Carousel/CarouselItem";

function Home() {
  const [imgSize, setImgSize] = useState();

  useEffect(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 425) {
      setImgSize("lg");
    } else {
      setImgSize("sm");
    }
  }, []);

  return (
    <div style={{ maxWidth: "100%", overflow: "hidden" }}>
      <ElipseFrame
        style={
          imgSize === "lg"
            ? { transform: "translateX(-20px)" }
            : { transform: "translateX(-50px)" }
        }
        size={imgSize}
      >
        <StyledImage url={bkg} alt={"Carro em uma garagem"} />
      </ElipseFrame>

      <CarouselContainer>
        <CarouselItem>
          <div
            style={{ height: "12rem", width: "8rem", background: "green" }}
          ></div>
        </CarouselItem>
        <CarouselItem>
          <div
            style={{ height: "12rem", width: "8rem", background: "green" }}
          ></div>
        </CarouselItem>
        <CarouselItem>
          <div
            style={{ height: "12rem", width: "8rem", background: "green" }}
          ></div>
        </CarouselItem>
        <CarouselItem>
          <div
            style={{ height: "12rem", width: "8rem", background: "green" }}
          ></div>
        </CarouselItem>
        <CarouselItem>
          <div
            style={{ height: "12rem", width: "8rem", background: "blue" }}
          ></div>
        </CarouselItem>
        <CarouselItem>
          <div
            style={{ height: "12rem", width: "8rem", background: "blue" }}
          ></div>
        </CarouselItem>
        <CarouselItem>
          <div
            style={{ height: "12rem", width: "8rem", background: "blue" }}
          ></div>
        </CarouselItem>
        <CarouselItem>
          <div
            style={{ height: "12rem", width: "8rem", background: "blue" }}
          ></div>
        </CarouselItem>
      </CarouselContainer>
    </div>
  );
}

export default Home;
