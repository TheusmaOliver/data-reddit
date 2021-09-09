import React from "react";
import "./cards.css";
export default function Cards() {
  return (
    <div className="cards">
      <hr />

      <div className="card">
        <div className="card-image">
          <img
            src="https://dubelectric.com/wp-content/uploads/2016/10/blog-post-img-4-300x174.jpg"
            alt="imagem do post"
          />
        </div>
        <div className="card-info">
          <h4 className="card-info__title">Titulo do post</h4>
          <span className="card-info__data">
            enviado há 6 horas por <span>usuario_nickname</span>
          </span>
          <button className="card-info__link">link do post</button>
        </div>
      </div>
      <hr />
      <div className="card">
        <div className="card-image">
          <img
            src="https://dubelectric.com/wp-content/uploads/2016/10/blog-post-img-4-300x174.jpg"
            alt="imagem do post"
          />
        </div>
        <div className="card-info">
          <h4 className="card-info__title">Titulo do post</h4>
          <span className="card-info__data">
            enviado há 6 horas por <span>usuario_nickname</span>
          </span>
          <button className="card-info__link">link do post</button>
        </div>
      </div>
      <hr />
      <div className="card">
        <div className="card-image">
          <img
            src="https://dubelectric.com/wp-content/uploads/2016/10/blog-post-img-4-300x174.jpg"
            alt="imagem do post"
          />
        </div>
        <div className="card-info">
          <h4 className="card-info__title">Titulo do post</h4>
          <span className="card-info__data">
            enviado há 6 horas por <span>usuario_nickname</span>
          </span>
          <button className="card-info__link">link do post</button>
        </div>
      </div>
    </div>
  );
}
