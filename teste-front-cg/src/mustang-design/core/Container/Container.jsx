import styled from "styled-components";
import { whiteColor } from "../UI/variables";

export const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => (props.width ? props.width : "42.75rem")};
  height: ${(props) => (props.height ? props.height : "45.2rem")};
  background: ${(props) => (props.color ? props.color : whiteColor)};
  box-shadow: ${(props) =>
    props.shadow ? "0px 6px 24px 3px rgba(0, 0, 0, 0.25)" : "none"};
  border-radius: ${(props) => (props.radius ? props.radius : "1.5rem")};

  border: ${(props) => (props.border ? props.border : "none")};
  padding: ${(props) => (props.padding ? props.padding : "1.5rem 1rem")};
`;
export const HorizontalContainer = styled(VerticalContainer)`
  flex-direction: row;
`;
