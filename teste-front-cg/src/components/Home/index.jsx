import React, { useEffect, useState } from "react";
import bkg from "../../assets/background.png";

import car1 from "../../assets/car1.png";
import car2 from "../../assets/car2.png";
import car3 from "../../assets/car3.png";

import { ElipseFrame } from "../../mustang-design/core/Frame/Frames";

import StyledImage from "../../mustang-design/core/Image";
import CarouselContainer from "../../mustang-design/core/Carousel/CarouselContainer";
import CarouselItem from "../../mustang-design/core/Carousel/CarouselItem";
import Button from "../../mustang-design/core/Button";
import Card from "../../mustang-design/core/Card/CardContainer.jsx";
import CardItem from "../../mustang-design/core/Card/CardItem.jsx";

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
          <Card
            src={car1}
            horizontal={"8%"}
            vertical={"84%"}
            tittle={"Mustang"}
          >
            <CardItem icon={"bi:calendar2-date"}>2015</CardItem>
            <CardItem icon={"bi:calendar2-date"}>2015</CardItem>
            <CardItem icon={"bi:calendar2-date"}>2015</CardItem>
            <CardItem icon={"bi:calendar2-date"}>2015</CardItem>

            <Button type={"primary"} url={"https://www.youtube.com"}>
              Ver carro
            </Button>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card
            src={car2}
            horizontal={"8%"}
            vertical={"92%"}
            tittle={"Mustang"}
          >
            <CardItem icon={"bi:calendar2-date"}>2015</CardItem>
            <CardItem icon={"bi:calendar2-date"}>2015</CardItem>
            <CardItem icon={"bi:calendar2-date"}>2015</CardItem>
            <CardItem icon={"bi:calendar2-date"}>2015</CardItem>
            <Button type={"primary"} url={"https://www.youtube.com"}>
              Ver carro
            </Button>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card
            src={car3}
            horizontal={"-14%"}
            vertical={"89%"}
            tittle={"Mustang"}
          >
            <CardItem icon={"bi:calendar2-date"}>2015</CardItem>
            <CardItem icon={"bi:calendar2-date"}>2015</CardItem>
            <CardItem icon={"bi:calendar2-date"}>2015</CardItem>
            <CardItem icon={"bi:calendar2-date"}>2015</CardItem>
            <Button type={"primary"} url={"https://www.youtube.com"}>
              Ver carro
            </Button>
          </Card>
        </CarouselItem>
      </CarouselContainer>
    </div>
  );
}

export default Home;
