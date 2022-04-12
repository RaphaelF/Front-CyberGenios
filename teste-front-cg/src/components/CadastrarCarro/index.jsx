import { useState, useRef } from "react";
import RowContainer from "../../mustang-design/core/Container/RowContainer";
import StackContainer from "../../mustang-design/core/Container/StackContainer";
import { primaryColor } from "../../mustang-design/core/UI/variables";
import Tittle from "../../mustang-design/UI/Tittle";
import retangulo from "../../assets/Rectangle 15.png";
import StyledImage from "../../mustang-design/core/Image";

import Button from "../../mustang-design/UI/Button";
import { FormContainer } from "../../mustang-design/core/Form/Form";
import StyledInput from "../../mustang-design/core/Form/FormItem";
import { Icon } from "@iconify/react";

function CadastrarCarro({ cancelar, carros, setCarros, carroSelecionado }) {
  const inputFile = useRef(null);

  const [imagem, setImagem] = useState(
    carroSelecionado.picture ? carroSelecionado.picture : retangulo
  );
  const [nome, setNome] = useState(
    carroSelecionado.name ? carroSelecionado.name : ""
  );
  const [ano, setAno] = useState(
    carroSelecionado.year ? carroSelecionado.year : ""
  );
  const [velocidade, setVelocidade] = useState(
    carroSelecionado.speed ? carroSelecionado.speed : ""
  );
  const [economia, setEconomia] = useState(
    carroSelecionado.mileage ? carroSelecionado.mileage : ""
  );
  const [nota, setNota] = useState(
    carroSelecionado.userRate ? carroSelecionado.userRate : ""
  );
  const [linkProd, setLinkProd] = useState(
    carroSelecionado.linkProd ? carroSelecionado.linkProd : ""
  );

  function adicionar(selected) {
    const carro = {
      id: carros.length,
      picture: imagem,
      horizontal: 0,
      vertical: 0,
      name: nome,
      year: ano,
      speed: velocidade,
      mileage: economia,
      userRate: nota,
      linkProd: linkProd,
    };
    const index = carros.findIndex((car) => car.id === selected.id);
    console.log(index);

    if (index !== -1) {
      carros.splice(index, 1, carro);
    } else {
      const newCarros = [...carros, carro];

      setCarros(newCarros);
    }
  }

  function handleClick() {
    inputFile.current.click();
  }

  function handleChange(event) {
    const fileUploaded = event.target.files[0];
    setImagem(fileUploaded);
  }

  return (
    <StackContainer shadow={true}>
      <div style={{ position: "absolute", top: "2.1rem", right: "30%" }}>
        <Button type={"tertiary"} color={"#000000"} url={"#"} click={cancelar}>
          <Icon icon="ant-design:close-circle-outlined" width="21" />
        </Button>
      </div>
      <RowContainer
        color={"transparent"}
        width={"100%"}
        height={"fit-content"}
        padding={"0px"}
      >
        <StackContainer width={"40%"} color={"transparent"} height={"38rem"}>
          <Tittle color={primaryColor} size={"1.5rem"}>
            Adicionar Novo
          </Tittle>
          <div style={{ padding: "1.5rem" }}>
            <StyledImage src={imagem} width={"14rem"} height={"14rem"} />
          </div>
          <input
            type={"file"}
            ref={inputFile}
            style={{ display: "none" }}
            onChange={(e) => handleChange(e)}
          />
          <Button type={"tertiary"} url={"#"} click={handleClick}>
            Selecionar Imagem
          </Button>
        </StackContainer>
        <div style={{ width: "60%", paddingLeft: "2rem" }}>
          <FormContainer>
            <StyledInput
              id={"nome"}
              label={"Nome"}
              value={nome}
              onChange={(e) => {
                setNome(e.target.value);
              }}
            />
            <StyledInput
              id={"ano"}
              label={"Ano"}
              value={ano}
              onChange={(e) => {
                setAno(e.target.value);
              }}
            />
            <StyledInput
              id={"velocidade"}
              label={"Velocidade Máxima Km/h"}
              value={velocidade}
              onChange={(e) => {
                setVelocidade(e.target.value);
              }}
            />
            <StyledInput
              id={"economia"}
              label={"Nota Economia"}
              value={economia}
              onChange={(e) => {
                setEconomia(e.target.value);
              }}
            />
            <StyledInput
              id={"notaUsuarios"}
              label={"Nota Usuários"}
              value={nota}
              onChange={(e) => {
                setNota(e.target.value);
              }}
            />
            <StyledInput
              id={"link"}
              label={"Link Produto"}
              value={linkProd}
              onChange={(e) => {
                setLinkProd(e.target.value);
              }}
            />
          </FormContainer>
        </div>
      </RowContainer>
      <RowContainer
        color={"transparent"}
        width={"100%"}
        height={"fit-content"}
        padding={"0px"}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            padding: "1rem",
          }}
        >
          <div style={{ marginRight: "2rem" }}>
            <Button
              type={"tertiary"}
              url={"#"}
              click={cancelar}
              color={primaryColor}
            >
              Cancelar
            </Button>
          </div>

          <Button
            type={"secondary"}
            url={"#"}
            click={() => adicionar(carroSelecionado)}
          >
            + Adicionar Novo
          </Button>
        </div>
      </RowContainer>
    </StackContainer>
  );
}

export default CadastrarCarro;
