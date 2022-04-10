import Blury from "../../mustang-design/core/BlurContainer";
import Button from "../../mustang-design/core/Button";
import Paragraf from "../../mustang-design/UI/Paragraf";
import Tittle from "../../mustang-design/UI/Tittle";
import footerbkg1 from "../../assets/footerbkg1.png";
import { whiteColor } from "../../mustang-design/core/UI/variables";
import StyledImage from "../../mustang-design/core/Image";

export function Footer() {
  return (
    <section style={{ position: "relative" }}>
      <StyledImage
        url={footerbkg1}
        height={"33.9rem"}
        width={"106.875rem"}
        fit={"fill"}
      />

      <Blury>
        <Tittle>Mustang</Tittle>
        <Paragraf>
          O Ford Mustang é um automóvel desportivo produzido pela Ford Motor
          Company. O carro foi apresentado ao público em 17 de abril de 1964
          durante a New York World's Fair. O Mustang, apesar de ter sofrido
          grandes alterações ao longo dos anos é a mais antiga linha de
          automóveis da Ford.
        </Paragraf>
        <Button
          type={"primary"}
          radius={"4px"}
          url={
            "https://www.youtube.com/watch?v=Sy962UmhnUY&list=PLycLooyYdGl_vclNUlXfaV53iCnxBr0Nk"
          }
          color={whiteColor}
        >
          Ver Carros
        </Button>
      </Blury>
    </section>
  );
}
