import styled from "styled-components";
import { whiteColor } from "../UI/variables";

export const ElipseFrame = styled.div`
  width: 2462px;
  height: 800px;
  background-color: ${whiteColor};
  clip-path: ellipse(55% 65% at 32% 20%);
  @media screen and (max-width: 425px) {
    height: 343px;
    width: 425px;
    clip-path: ellipse(90% 55% at 50% 15%);
  }
`;
