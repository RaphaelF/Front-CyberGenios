import React from "react";

import bkg from "../../assets/background.png";
import bkgMobile from "../../assets/background-mobile.png";
import { ElipseFrame } from "../../mustang-design/core/Frame/Frames";

import StyledImage from "../../mustang-design/core/Image";

function Home() {
  var full_window_width = window.outerWidth;
  console.log(full_window_width);
  return (
    <div style={{ maxWidth: "100%", overflow: "hidden" }}>
      <ElipseFrame>
        <StyledImage url={bkg} alt={"Carro em uma garagem"} />
      </ElipseFrame>
    </div>
  );
}

export default Home;
