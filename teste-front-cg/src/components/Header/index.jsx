import React, { useEffect, useState } from "react";
import bkg from "../../assets/background.png";
import { ElipseFrame } from "../../mustang-design/core/Frame/Frames";
import StyledImage from "../../mustang-design/core/Image";

export function Header() {
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
    <ElipseFrame
      style={
        imgSize === "lg"
          ? { transform: "translateX(-28.125rem)" }
          : { transform: "translate(-3.125rem,-3.125rem)" }
      }
      size={imgSize}
    >
      <StyledImage
        src={bkg}
        height={imgSize === "sm" ? "21.4rem" : "56.4rem"}
        alt={"Carro em uma garagem"}
        fit={imgSize === "lg" ? "contain" : "scale-down"}
      />
    </ElipseFrame>
  );
}
