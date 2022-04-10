import { primaryColor } from "../../mustang-design/core/UI/variables";

import { Footer } from "../Footer/Footer";
import BarraDeNavegacao from "../BarraDeNavegacao.jsx";
import { cars } from "../../data/cars";
import Tittle from "../../mustang-design/UI/Tittle";
import Button from "../../mustang-design/core/Button";

export function Tabela() {
  function hanldeClick() {
    console.log("Abrir tabela");
  }
  return (
    <>
      <BarraDeNavegacao color={primaryColor} />

      <section
        style={{ width: "100%", height: "500px", padding: "10rem 5rem 0 5rem" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Tittle color={primaryColor}>Lista</Tittle>
          <Button
            type={"primary"}
            color={primaryColor}
            url={"#"}
            click={hanldeClick}
          >
            <div style={{ marginRight: "1rem" }}>+</div>
            Adicionar Novo
          </Button>
        </div>
      </section>
      <Footer />
    </>
  );
}
