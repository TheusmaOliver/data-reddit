import React, { useContext } from "react";
import "../../styles/login.css";
import svgLogoWinnin from "../../assets/images/logo.svg";
import svgLogoGoogle from "../../assets/images/google-icon.svg";
import { useHistory } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

export default function Login() {
  const router = useHistory();
  const { signInWithGoogle, user } = useContext(AuthContext);
  async function signIn() {
    if (!user) {
      await signInWithGoogle();
    }
    router.push("/inforeddit");
  }
  return (
    <div className="login">
      <img className="login-logo" src={svgLogoWinnin} alt="logo winnin" />
      <section className="login-section">
        <button className="login-section__button" onClick={signIn}>
          <img src={svgLogoGoogle} alt="icone do google" />
          Login with google
        </button>
      </section>
    </div>
  );
}
