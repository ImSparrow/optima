import { NavLink } from "react-router-dom";
import classes from "./NavLinks.module.css";
const NavLinks = () => {
  return (
    <ul className={classes["nav-links"]}>
      <li>
        <NavLink to="/" exact>
          ALL USERS
        </NavLink>
      </li>

      <li>
        <NavLink to="/posts/new">ADD POST</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
