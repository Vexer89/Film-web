import { Link } from "react-router-dom";
import "../style/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="navbar-logo-link">
          Movie App
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/favourites" className="navbar-link">
          Favourites
        </Link>
      </div>
    </nav>
  );
}
export default NavBar;
