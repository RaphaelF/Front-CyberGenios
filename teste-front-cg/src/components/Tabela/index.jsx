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
import Modal from "../../mustang-design/core/Modal";
import CadastrarCarro from "../CadastrarCarro";

export function Tabela() {
  const [carros, setCarros] = useState(cars);
  const [open, setOpen] = useState(false);
  const [carroSelecionado, setCarroSelecionado] = useState({});
  function closeModal() {
    setOpen(!open);
  }
  function newItem() {
    console.log(carros);
    setCarroSelecionado({});
    setOpen(!open);
  }
  function editItem(value) {
    setCarroSelecionado(value);
    setOpen(!open);
  }

  function deleteItem(value) {
    const newCars = carros.filter((carro) => carro.id !== value.id);
    setCarros(newCars);
  }

  return (
    <>
      {open && (
        <Modal>
          <CadastrarCarro
            cancelar={closeModal}
            carros={carros}
            setCarros={setCarros}
            carroSelecionado={carroSelecionado}
          />
        </Modal>
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
          {carros.map((car, index) => {
            return (
              <TableItem
                key={index}
                edit={() => editItem(car)}
                del={() => deleteItem(car)}
              >
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
