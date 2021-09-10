import React from "react";
import { useHistory } from "react-router";
import "../styles/navbar.css";
export default function Navbar({ url }) {
  const router = useHistory();
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-list__item">
          <button onClick={() => router.push(`${url}/hot`)} className="btn">
            Hot
          </button>
        </li>
        <li className="navbar-list__item">
          <button onClick={() => router.push(`${url}/new`)} className="btn">
            News
          </button>
        </li>
        <li className="navbar-list__item">
          <button onClick={() => router.push(`${url}/rising`)} className="btn">
            Rising
          </button>
        </li>
      </ul>
    </nav>
  );
}
