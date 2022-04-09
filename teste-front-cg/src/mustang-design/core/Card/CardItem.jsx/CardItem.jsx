import styled from "styled-components";
import { primaryColor } from "../../UI/variables";
import { Icon } from "@iconify/react";

export const CardRow = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin: 1rem;
`;
export const CardIcon = styled(Icon)`
  height: 2.5rem;
  width: 2.5rem;
  color: ${primaryColor};
  margin: 0 2.3rem 0 0;
`;
export const CardInfo = styled.p`
  font-family: "Montserrat";
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 150%;
  color: ${primaryColor};
`;
