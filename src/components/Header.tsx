import Contacts from "./Contacts";
import Logo from "./Logo";

const Header = () => {
  return (
    <nav className="header">
      <Logo />
      <ul className="nav-links">
        <li>
          <a href="#">О студии</a>
        </li>
        <li>
          <a href="#">Что мы делаем</a>
        </li>
        <li>
          <a href="#">Цены</a>
        </li>
        <li>
          <a href="#">Галерея</a>
        </li>
      </ul>
      <Contacts />
      <div className="burger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};
export default Header;
