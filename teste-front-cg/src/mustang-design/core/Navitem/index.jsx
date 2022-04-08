import { NavItemContainer, NavLink } from "./Navitem.jsx";

const Navitem = ({ Text, url }) => {
  return (
    <NavItemContainer>
      <NavLink href={url}>{Text}</NavLink>
    </NavItemContainer>
  );
};

export default Navitem;
