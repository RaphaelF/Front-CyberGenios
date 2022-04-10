import { cars } from "../../data/cars";
import CarouselContainer from "../../mustang-design/core/Carousel/CarouselContainer";
import CarouselItem from "../../mustang-design/core/Carousel/CarouselItem";
import Button from "../../mustang-design/core/Button";
import Card from "../../mustang-design/core/Card/CardContainer.jsx";
import CardItem from "../../mustang-design/core/Card/CardItem.jsx";

import { primaryColor } from "../../mustang-design/core/UI/variables";
import { Header } from "../Header";
import { Footer } from "../Footer/Footer";
import BarraDeNavegacao from "../BarraDeNavegacao.jsx";

function Home() {
  return (
    <div
      style={{
        width: "100%",
        height: "fit-content",
        overflow: "hidden",
      }}
    >
      <BarraDeNavegacao />
      <Header />
      <CarouselContainer>
        {cars.map((car, index) => {
          return (
            <CarouselItem key={index}>
              <Card
                src={car.picture}
                horizontal={car.horizontal}
                vertical={car.vertical}
                tittle={car.name}
              >
                <CardItem icon={"bi:calendar2-date"}>{car.year}</CardItem>
                <CardItem icon={"fluent:top-speed-20-regular"}>
                  {car.speed}
                </CardItem>
                <CardItem icon={"simple-line-icons:energy"}>
                  {car.mileage}
                </CardItem>
                <CardItem icon={"fluent:people-20-regular"}>
                  {car.userRate}
                </CardItem>
                <Button
                  type={"primary"}
                  color={primaryColor}
                  url={
                    "https://www.youtube.com/watch?v=Sy962UmhnUY&list=PLycLooyYdGl_vclNUlXfaV53iCnxBr0Nk"
                  }
                >
                  {" "}
                  Ver Carros
                </Button>
              </Card>
            </CarouselItem>
          );
        })}
      </CarouselContainer>
      <Footer />
    </div>
  );
}

export default Home;
