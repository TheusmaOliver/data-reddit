import React from "react";
import "../styles/loading.css";
import loading from "../assets/images/progress-circle.gif";
export default function Loading() {
  return (
    <div className="loading">
      <img className="loading-image" src={loading} alt="loading" />
    </div>
  );
}
