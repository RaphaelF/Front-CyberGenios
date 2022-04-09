import styled from "styled-components";
import { primaryColor } from "../../UI/variables";

export const CardContainer = styled.span`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: ${(props) => (props.width ? props.width : "17.563rem")};
  height: fit-content;
  padding: 1.5rem 2rem;
  border: 1px solid ${primaryColor};
  box-sizing: border-box;
  border-radius: 1.5rem;
`;

export const CardTittle = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 150%;
  text-align: center;
  /* Primary */
  color: ${primaryColor};
`;

export const CardImage = styled.img`
  position: absolute;
  display: flex;

  /* width: 228.21px;
  height: 171px; */
  left: ${(props) => props.horizontal};
  bottom: ${(props) => props.vertical};
`;
