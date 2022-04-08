import styled from "styled-components";
import { primaryColor, whiteColor } from "../UI/variables";
export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  overflow: auto;
  overflow-x: auto;
  padding: 3rem;
  background: grey;
  scroll-behavior: auto;
  ::-webkit-scrollbar {
    height: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${primaryColor};
  }
  ::-webkit-scrollbar-track {
    background: red;
  }
`;

export const CarouselItem = styled.div`
  flex: none;
  width: 10rem;
  height: 10rem;
  margin: 4rem;
  background-color: ${(props) => props.color};
`;
