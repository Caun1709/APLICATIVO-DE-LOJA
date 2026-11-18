
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav className="menu">
      <NavLink to="/">Início</NavLink>
      <NavLink to="/produtos">Produtos</NavLink>
      <NavLink to="/sobre">Sobre</NavLink>
      <NavLink to="/carrinho">🛒 Carrinho</NavLink>
    </nav>
  );
}

export default Menu;
