import { ImageContainer, Image } from "./Image";

const StyledImage = ({ url, alt, fit, height, width }) => {
  return (
    <ImageContainer>
      <Image src={url} alt={alt} fit={fit} height={height} width={width} />
    </ImageContainer>
  );
};

export default StyledImage;
