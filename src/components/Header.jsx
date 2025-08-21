import { Link } from "react-router-dom";
import "../styles/global.css"; // se quiser garantir estilos

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-link">🏠 Home</Link>
        <Link to="/sobre" className="nav-link">ℹ️ Sobre Nós</Link>
        <Link to="/contato" className="nav-link">📞 Contato</Link>
      </nav>
    </header>
  );
}
