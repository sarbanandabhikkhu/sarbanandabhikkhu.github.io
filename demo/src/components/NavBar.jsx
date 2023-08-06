import { NavLink } from "react-router-dom";

function NavBar({ showMenu }) {
  return (
    <nav className={showMenu ? "menu show" : "menu"}>
      <div className={showMenu ? "menu-branding show" : "menu-branding"}>
        <div className="portrait"></div>
      </div>
      <ul className={showMenu ? "menu-nav show" : "menu-nav"}>
        <li className={showMenu ? "nav-item show" : "nav-item"}>
          <NavLink to="/" activeClassName="active" className="nav-link">
            Home
          </NavLink>
        </li>
        <li className={showMenu ? "nav-item show" : "nav-item"}>
          <NavLink to="/about" activeClassName="active" className="nav-link">
            About Me
          </NavLink>
        </li>
        <li className={showMenu ? "nav-item show" : "nav-item"}>
          <NavLink to="/work" activeClassName="active" className="nav-link">
            My Work
          </NavLink>
        </li>
        <li className={showMenu ? "nav-item show" : "nav-item"}>
          <NavLink to="/contact" activeClassName="active" className="nav-link">
            Contact Me
          </NavLink>
        </li>
         <li className={showMenu ? "nav-item show" : "nav-item"}>
          <NavLink
            to="/dashboard"
            activeClassName="active"
            className="nav-link"
          >
            Dashboard
          </NavLink>
        </li>
        <li className={showMenu ? "nav-item show" : "nav-item"}>
          <NavLink to="/login" activeClassName="active" className="nav-link">
            Login
          </NavLink>
        </li>
       
      </ul>
    </nav>
  );
}

export default NavBar;
