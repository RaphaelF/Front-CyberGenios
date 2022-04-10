import styled from "styled-components";

export const Image = styled.img`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "903px")};
  object-fit: ${(props) => (props.fit ? props.fit : "fill")};

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

  max-height: 704px;
`;
