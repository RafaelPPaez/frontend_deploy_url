import "./header.css";

import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import MenuMobile from "./MenuMobile";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const menuOptions = ["Filmes", "Séries", "Livros", "Gerenciar"];

  const handleCloseMenu = () => {
    console.log("Menu fechado");
  };

  return (
    <header>
      <div className="container navbar">
        <nav className="navbar">
          <div className="nav_left">
            <MenuMobile options={menuOptions} onClose={handleCloseMenu} />

            <Link to="/" className="logo">
              <img src={logo} alt="logo" />
            </Link>
            <ul className="navbar">
              <div className="menuOptions">
                <Link to="/pages/Filmes">Filmes</Link>
                <Link to="/pages/Series">Séries</Link>
                <Link to="/pages/Livros">Livros</Link>
                <Link className="adm_access" to="/pages/Gerenciar">
                  Gerenciar
                </Link>
              </div>
            </ul>
          </div>
          <div className="nav_right">
            <form className="search">
              <input id="txtSearch" type="text" placeholder="Search"></input>
            </form>
            <FaSearch className="mobileSearch" size={30} />
            {/* <div className="language">
              <p>US</p>
              <p>ER</p>
            </div> */}
            <button className="login">
              <Link to="/pages/Login">Login</Link>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
