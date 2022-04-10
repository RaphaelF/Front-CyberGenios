import styled from "styled-components";

export const Tittle = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => (props.size ? props.size : "3.5rem")};
  line-height: 150%;
  /* or 84px */

  text-align: right;

  color: ${(props) => (props.color ? props.color : "#ffffff")};
`;
