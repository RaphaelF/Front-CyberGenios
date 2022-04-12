import { ImageContainer, Image } from "./Image";

const StyledImage = ({ src, alt, fit, height, width }) => {
  return (
    <ImageContainer>
      <Image src={src} alt={alt} fit={fit} height={height} width={width} />
    </ImageContainer>
  );
};

export default StyledImage;
