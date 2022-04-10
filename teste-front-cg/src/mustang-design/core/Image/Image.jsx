import styled from "styled-components";

export const Image = styled.img`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "903px")};
  object-fit: ${(props) => (props.fit ? props.fit : "fill")};

  border: none;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  height: fit-content;
  max-height: 704px;
`;
