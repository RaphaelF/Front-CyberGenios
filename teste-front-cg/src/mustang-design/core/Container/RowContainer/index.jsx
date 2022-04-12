import { HorizontalContainer } from "../Container";

function RowContainer({
  width,
  height,
  color,
  radius,
  children,
  border,
  shadow = false,
  padding,
}) {
  return (
    <HorizontalContainer
      width={width}
      height={height}
      color={color}
      radius={radius}
      border={border}
      shadow={shadow}
      padding={padding}
    >
      {children}
    </HorizontalContainer>
  );
}

export default RowContainer;
