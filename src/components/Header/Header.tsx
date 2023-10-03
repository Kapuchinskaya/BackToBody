import { useState } from "react";
import Contacts from "./Contacts";
import Logo from "./Logo";
import "./Header.css";
import NavigationElement from "./NavigationElement";

const Header = () => {
  const [isBurgerToggled, setIsBurgerToggled] = useState(false);

  const toggleBurgerHandler = () => {
    setIsBurgerToggled(!isBurgerToggled);
  };

  return (
    <nav className="header">
      <Logo />
      <ul className={`nav-links ${isBurgerToggled ? "nav-active" : ""}`}>
        <NavigationElement navigationElementText="О нас" />
        <NavigationElement navigationElementText="Наша программа" />
        <NavigationElement navigationElementText="Цены" />
        <NavigationElement navigationElementText="Галерея" />
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
