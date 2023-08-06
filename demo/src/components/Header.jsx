import { useState } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <div
        className={showMenu ? "menu-btn close" : "menu-btn"}
        onClick={handleMenu}
      >
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div>
      <NavBar showMenu={showMenu} />
    </header>
  );
}

export default Header;
