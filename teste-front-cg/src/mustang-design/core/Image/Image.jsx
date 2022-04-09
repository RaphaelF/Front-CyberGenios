import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: 903px;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: ${(props) => (props.size ? props.size : "contain")};
  border: none;

  @media screen and (max-width: 425px) {
    height: 343px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  max-width: 1580px;
  max-height: 704px;
  overflow: hidden;
`;
