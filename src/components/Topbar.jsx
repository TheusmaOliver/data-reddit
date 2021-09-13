import React, { useState } from "react";
import { firebase } from "../services/firebase";
import { useHistory } from "react-router";
import winninLogo from "../assets/images/winnin-logo.png";
import { Menu } from "@material-ui/icons";
import "../styles/topbar.css";
export default function Topbar({ user }) {
  const router = useHistory();
  const [menu, setMenu] = useState(false);

  function logOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        window.location.reload();
      });
  }

  function mostrarMenu() {
    setMenu(!menu);
  }
  return (
    <header className="header">
      <div className="header-content">
        <img className="header-logo" src={winninLogo} alt="logo da winnin" />
        <h1 className="header-title">
          Info-<span>Reddit</span>
        </h1>

        <div>
          <p className="header-icone" onClick={() => mostrarMenu()}>
            <Menu />
          </p>
          <ul className={`header-options ${menu ? "active" : ""}`}>
            <li>
              {!user ? (
                <button
                  onClick={() => router.push("/")}
                  className="header-info__button"
                >
                  Login
                </button>
              ) : (
                <>
                  <img
                    className="header-info__avatar"
                    src={user?.avatar}
                    alt="foto de perfil"
                  />
                  <span className="header-info__name">{user?.name}</span>
                </>
              )}
            </li>
            <li>
              {!user ? (
                ""
              ) : (
                <button className="header-info__button" onClick={logOut}>
                  Log out
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
