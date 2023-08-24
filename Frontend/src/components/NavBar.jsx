import { useState } from "react";
import logo from "../assets/images/logolotte.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [menuBurger, setMenuBurger] = useState(false);

  function toggleMenu() {
    setMenuBurger(!menuBurger);
  }

  return (
    <navbar>
        <a href="/" className="active">
          <img src={logo} alt="logo"/>
        </a>

        <ul className="menu">
          <li>
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#about">Qui suis-je ?</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

      <FontAwesomeIcon
        className="burger"
        icon={menuBurger ? faTimes : faBars}
        onClick={toggleMenu}
      />
      {menuBurger && (
        <ul className="menuBurger">
          <li>
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#about">Qui suis-je ?</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      )}
    </navbar>
  );
}

export default NavBar;
