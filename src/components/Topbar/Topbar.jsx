import React from "react";
import winninLogo from "../../assets/images/winnin-logo.png";
import "./topbar.css";
export default function Topbar() {
  return (
    <header className="header">
      <img className="header-logo" src={winninLogo} alt="logo da winnin" />
      <h1 className="header-title">
        Info-<span>Reddit</span>
      </h1>
      <span>darkmode</span>
    </header>
  );
}
