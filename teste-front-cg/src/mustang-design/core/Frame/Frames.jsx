import styled from "styled-components";
import { whiteColor } from "../UI/variables";

export const ElipseFrame = styled.div`
  width: ${(props) => (props.size === "lg" ? "2462px" : "425px")};
  height: ${(props) => (props.size === "lg" ? "800px" : "343px")};
  background-color: ${whiteColor};
  clip-path: ellipse(75% 65% at 45% 20%);
  @media screen and (max-width: 425px) {
    height: 343px;
    width: 425px;
    clip-path: ellipse(90% 65% at 50% 15%);
  }
`;
