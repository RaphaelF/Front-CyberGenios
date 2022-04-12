import { VerticalContainer } from "../Container";

function StackContainer({
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
    <VerticalContainer
      width={width}
      height={height}
      color={color}
      radius={radius}
      border={border}
      shadow={shadow}
      padding={padding}
    >
      {children}
    </VerticalContainer>
  );
}

export default StackContainer;
