import "../styles/style.scss";
import logo from "../imgs/logo-bitcat.webp";
import hamburger from "../imgs/hamburger.webp";
import { useState } from "react";

function MenuItem({ href, title, onClickHandler }) {
  return (
    <li className="nav_link" onClick={onClickHandler}>
      <a href={href}>{title}</a>
    </li>
  );
}
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function buttonClick() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div>
      <div className="header">
        <nav className="nav">
          <div className="logo">
            <a href="#home">
              <img src={logo} alt="bitcat logo" />
            </a>
          </div>
          <ul className={`${menuOpen ? "nav-open nav-menu" : "nav-menu"}`}>
            <MenuItem
              title="Home Page"
              href="#home"
              onClickHandler={buttonClick}
            />
            <MenuItem
              title="About"
              href="#about"
              onClickHandler={buttonClick}
            />
            <MenuItem
              title="Social Media"
              href="#social-media"
              onClickHandler={buttonClick}
            />
          </ul>
          <button className="nav--toggle" onClick={buttonClick}>
            <img className="hamburger" src={hamburger} alt="hamburger menu" />
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Header;
