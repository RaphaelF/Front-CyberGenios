import { useState } from "react";

import { primaryColor } from "../../mustang-design/core/UI/variables";

import { Footer } from "../Footer/Footer";
import BarraDeNavegacao from "../BarraDeNavegacao.jsx";
import { cars } from "../../data/cars";
import Tittle from "../../mustang-design/UI/Tittle";
import Button from "../../mustang-design/UI/Button";
import TableContainer from "../../mustang-design/core/Table/TableContainer";
import TableHead from "../../mustang-design/core/Table/TableHead.jsx";
import TableItem from "../../mustang-design/core/Table/TableItem";

export function Tabela() {
  const [open, setOpen] = useState(false);
  function newItem() {
    setOpen(!open);
  }
  function editItem() {
    setOpen(!open);
  }
  function deleteItem() {
    console.log("Deletando item Awwwww");
  }
  return (
    <>
      {open && (
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100vh",
            background: "#aeb1b3",
            opacity: 0.5,
            zIndex: 10,
          }}
        >
          <button
            style={{ position: "absolute", top: "6rem", right: "2rem" }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setOpen(!open);
            }}
          >
            {" "}
            CLOSE
          </button>
        </div>
      )}
      <BarraDeNavegacao color={primaryColor} />

      <section
        style={{
          width: "100%",
          height: "fit-content",
          padding: "10rem 5rem 0 5rem",
          marginBottom: "4rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "2rem",
          }}
        >
          <Tittle color={primaryColor}>Lista</Tittle>
          <Button
            type={"primary"}
            color={primaryColor}
            url={"#"}
            click={newItem}
          >
            <div style={{ marginRight: "1rem" }}>+</div>
            Adicionar Novo
          </Button>
        </div>

        <TableContainer>
          <TableHead>
            <>Nome</>
            <>Ano</>
            <>Velocidade máx Km/h</>
            <>Nota Economia</>
            <>Nota usuários</>
            <></>
          </TableHead>
          {cars.map((car, index) => {
            return (
              <TableItem key={index} edit={editItem} del={deleteItem}>
                <>{car.name}</>
                <>{car.year}</>
                <>{car.speed}</>
                <>{car.mileage}</>
                <>{car.userRate}</>
              </TableItem>
            );
          })}
        </TableContainer>
      </section>
      <Footer />
    </>
  );
}
