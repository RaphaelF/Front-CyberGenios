import styled from "styled-components";
export const Paragraf = styled.p`
  width: 100%;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: ${(props) => (props.size ? props.size : "1.25rem")};
  line-height: 250%;
  /* or 40px */
  margin: 1rem 0;
  text-align: ${(props) => (props.align ? props.align : "right")};

  color: ${(props) => (props.color ? props.color : "#ffffff")};

  @media screen and (max-width: 425px) {
    font-size: ${(props) => (props.size ? props.size : "1rem")};
    line-height: 200%;
    max-width: 312px;
  }
`;
