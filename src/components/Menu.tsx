
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <Link to="/">Início</Link>
      <Link to="/produtos">Produtos</Link>
      <Link to="/sobre">Sobre</Link>
    </nav>
  );
}

export default Menu;
