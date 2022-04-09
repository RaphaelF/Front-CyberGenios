import { CardIcon, CardInfo, CardRow } from "./CardItem";

function CardItem({ icon, children }) {
  return (
    <CardRow>
      <CardIcon icon={icon} />
      <CardInfo>{children}</CardInfo>
    </CardRow>
  );
}

export default CardItem;
