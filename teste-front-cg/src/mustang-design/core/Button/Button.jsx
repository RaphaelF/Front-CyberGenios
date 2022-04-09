import styled from "styled-components";
import { primaryColor, whiteColor } from "../UI/variables";

export const ButtonContainer = styled.div`
  height: 3rem;
  width: 100%;
  max-width: 18.875rem;
  border-radius: ${(props) => (props.radius ? props.radius : "1.3rem")};
  border: ${(props) =>
    props.type === "primary" ? `1px solid ${primaryColor}` : "none"};
  background: ${(props) =>
    props.type === "secondary" ? `${primaryColor}` : "none"};
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 200%;
  color: ${(props) =>
    props.type === "secondary" ? `${whiteColor}` : `${primaryColor}`};

  display: flex;
  padding: 0.5rem 4.5rem;
  align-items: center;
  text-align: center;
`;
