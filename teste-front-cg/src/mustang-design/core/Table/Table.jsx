import styled from "styled-components";
import { primaryColor, whiteColor } from "../UI/variables";

export const Table = styled.table`
  width: 100%;
`;

export const TableRow = styled.tr`
  display: flex;
  flex-direction: row;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  width: 100%;
  font-size: 1rem;
  line-height: 150%;
  border-radius: 6px;
  color: ${(props) => (props.textColor ? props.textColor : whiteColor)};
  background: ${(props) =>
    props.background ? props.background : primaryColor};
`;

export const TableHeader = styled.th`
  display: flex;
  align-items: center;
  padding: 2rem;
  width: 100%;
`;

export const TableCell = styled.td`
  display: flex;
  align-items: center;
  padding: 2rem;
  width: 100%;
  color: ${(props) => (props.textColor ? props.textColor : primaryColor)};
  background: ${(props) => (props.background ? props.background : whiteColor)};
`;
