import car1 from "../../assets/car1.png";
import car2 from "../../assets/car2.png";
import car3 from "../../assets/car3.png";

import CarouselContainer from "../../mustang-design/core/Carousel/CarouselContainer";
import CarouselItem from "../../mustang-design/core/Carousel/CarouselItem";
import Button from "../../mustang-design/core/Button";
import Card from "../../mustang-design/core/Card/CardContainer.jsx";
import CardItem from "../../mustang-design/core/Card/CardItem.jsx";

import { primaryColor } from "../../mustang-design/core/UI/variables";
import { Header } from "../Header";
import { Footer } from "../Footer/Footer";

function Home() {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <Header />
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

            <Button
              type={"primary"}
              color={primaryColor}
              url={
                "https://www.youtube.com/watch?v=Sy962UmhnUY&list=PLycLooyYdGl_vclNUlXfaV53iCnxBr0Nk"
              }
            >
              Ver Carros
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
            <Button
              type={"primary"}
              color={primaryColor}
              url={
                "https://www.youtube.com/watch?v=Sy962UmhnUY&list=PLycLooyYdGl_vclNUlXfaV53iCnxBr0Nk"
              }
            >
              Ver Carros
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
            <Button
              type={"primary"}
              color={primaryColor}
              url={
                "https://www.youtube.com/watch?v=Sy962UmhnUY&list=PLycLooyYdGl_vclNUlXfaV53iCnxBr0Nk"
              }
            >
              Ver Carros
            </Button>
          </Card>
        </CarouselItem>
      </CarouselContainer>
      <Footer />
    </div>
  );
}

export default Home;
