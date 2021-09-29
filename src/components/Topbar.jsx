import React from "react";
import winninLogo from "../assets/images/winnin-logo.png";
import "../styles/topbar.css";
export default function Topbar() {
  return (
    <header className="header">
      <div className="header-content">
        <img className="header-logo" src={winninLogo} alt="logo da winnin" />
        <h1 className="header-title">
          Info-<span>Reddit</span>
        </h1>

        <div></div>
      </div>
    </header>
  );
}
