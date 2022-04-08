import { ImageContainer, Image } from "./Image";

const StyledImage = ({ url, alt }) => {
  return (
    <ImageContainer>
      <Image url={url} alt={alt} />
    </ImageContainer>
  );
};

export default StyledImage;
