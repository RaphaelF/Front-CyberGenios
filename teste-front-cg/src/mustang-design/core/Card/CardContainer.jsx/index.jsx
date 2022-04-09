import { CardContainer, CardImage, CardTittle } from "./CardContainer";

function Card({ src, horizontal, vertical, tittle, children }) {
  return (
    <CardContainer>
      <CardImage src={src} horizontal={horizontal} vertical={vertical} />
      <CardTittle>{tittle}</CardTittle>
      {children}
    </CardContainer>
  );
}

export default Card;
