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

  const navigationElements: string[] = [
    "О нас",
    "Наша программа",
    "Цены",
    "Галерея",
  ];

  return (
    <nav className="header">
      <Logo />
      <ul className={`nav-links ${isBurgerToggled ? "nav-active" : ""}`}>
        {navigationElements.map((el) => {
          return <NavigationElement navigationElementText={el} key={el} />;
        })}
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
