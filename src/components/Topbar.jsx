import React from "react";
import winninLogo from "../assets/images/winnin-logo.png";
import "../styles/topbar.css";
export default function Topbar({ user }) {
  return (
    <header className="header">
      <img className="header-logo" src={winninLogo} alt="logo da winnin" />
      <h1 className="header-title">
        Info-<span>Reddit</span>
      </h1>
      <img src={user.avatar} alt="foto de perfil" />
    </header>
  );
}
