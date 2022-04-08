import React, { useEffect, useState } from "react";

import bkg from "../../assets/background.png";
import {
  CarouselContainer,
  CarouselItem,
} from "../../mustang-design/core/Carousel/Carousel";

import { ElipseFrame } from "../../mustang-design/core/Frame/Frames";

import StyledImage from "../../mustang-design/core/Image";

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

      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "20rem",
          background: "green",
          marginBottom: "5rem",
        }}
      >
        <CarouselContainer>
          <CarouselItem color={"blue"}></CarouselItem>
          <CarouselItem color={"red"}></CarouselItem>
          <CarouselItem color={"black"}></CarouselItem>
          <CarouselItem color={"white"}></CarouselItem>
          <CarouselItem color={"blue"}></CarouselItem>
          <CarouselItem color={"red"}></CarouselItem>
          <CarouselItem color={"black"}></CarouselItem>
          <CarouselItem color={"white"}></CarouselItem>
        </CarouselContainer>
      </div>
    </div>
  );
}

export default Home;
