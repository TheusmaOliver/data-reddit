import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar({ links }) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {links &&
          links.map((link) => (
            <li key={link.name} className="navbar-list__item">
              <NavLink to={link.url}>
                <button className="btn">{link.name}</button>
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
}
