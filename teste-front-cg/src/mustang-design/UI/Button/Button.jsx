import styled from "styled-components";
import { primaryColor, whiteColor } from "../../core/UI/variables";

export const ButtonContainer = styled.div`
  height: 3rem;
  width: ${(props) => (props.type === "tertiary" ? "fit-content" : "100%")};
  max-width: 18.875rem;
  border-radius: ${(props) => (props.radius ? props.radius : "1.3rem")};
  border: ${(props) =>
    props.type === "primary"
      ? props.color
        ? `1px solid ${props.color}`
        : `1px solid ${primaryColor}`
      : "none"};
  background: ${(props) =>
    props.type === "secondary"
      ? props.color
        ? props.color
        : `${primaryColor}`
      : "none"};
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 200%;
  color: ${(props) =>
    props.type === "secondary"
      ? props.color
        ? props.color
        : whiteColor
      : props.color
      ? props.color
      : primaryColor};
  display: flex;
  padding: ${(props) => (props.type === "tertiary" ? "0px" : "0.5rem 4.5rem")};
  align-items: center;
  text-align: center;
`;

export const ButtonLink = styled.a`
  color: ${(props) =>
    props.type === "primary"
      ? props.color
        ? `1px solid ${props.color}`
        : `1px solid ${primaryColor}`
      : "none"};
  :link,
  :visited {
    color: ${(props) => props.color};
  }
  :hover,
  :active {
    text-decoration: underline;
  }
`;
