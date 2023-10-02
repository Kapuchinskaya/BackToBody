import { useState } from "react";
import Contacts from "./Contacts";
import Logo from "./Logo";

const Header = () => {
  const [isBurgerToggled, setIsBurgerToggled] = useState(false);

  const toggleBurgerHandler = () => {
    setIsBurgerToggled(!isBurgerToggled);
  };

  return (
    <nav className="header">
      <Logo />
      <ul className={`nav-links ${isBurgerToggled ? "nav-active" : ""}`}>
        <li className={isBurgerToggled ? "nav-links-active" : ""}>
          <a href="#">О нас</a>
        </li>
        <li>
          <a href="#">Наша программа</a>
        </li>
        <li>
          <a href="#">Цены</a>
        </li>
        <li>
          <a href="#">Галерея</a>
        </li>
        <Contacts />
      </ul>
      <div className="burger" onClick={toggleBurgerHandler}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};
export default Header;
