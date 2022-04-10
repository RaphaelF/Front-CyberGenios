import styled from "styled-components";
export const Paragraf = styled.p`
  /* Desktop/Paragraph/MD */

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: ${(props) => (props.size ? props.size : "1.25rem")};
  line-height: 250%;
  /* or 40px */
  margin: 1rem 0;
  text-align: ${(props) => (props.align ? props.align : "right")};

  color: ${(props) => (props.color ? props.color : "#ffffff")};
`;
