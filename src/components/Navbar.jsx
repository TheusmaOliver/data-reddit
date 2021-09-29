import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar({links}) {

  return (
    <nav className="navbar">
      {links && links.map(link => (
        <NavLink to={link.url}>{link.name}</NavLink>
      ))}
    </nav>
  );
}
