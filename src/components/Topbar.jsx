import React from "react";
import { useHistory } from "react-router";
import winninLogo from "../assets/images/winnin-logo.png";
import "../styles/topbar.css";
export default function Topbar({ user }) {
  const router = useHistory();
  console.log(user);
  function loadUser() {
    if (!user) {
      return (
        <button
          onClick={() => router.push("/")}
          className="header-info__button"
        >
          Login
        </button>
      );
    }
    return (
      <img
        className="header-image__avatar"
        src={user?.avatar}
        alt="foto de perfil"
      />
    );
  }
  return (
    <header className="header">
      <div className="header-content">
        <img className="header-logo" src={winninLogo} alt="logo da winnin" />
        <h1 className="header-title">
          Info-<span>Reddit</span>
        </h1>
        <div className="header-info">{loadUser()}</div>
      </div>
    </header>
  );
}
