import React from "react";
import moment from "moment";
import reeditLogo from "../../assets/images/reddit.png";
import "./cards.css";
export default function Cards({ data }) {
  const date = (utc) => {
    const data = new Date(utc * 1000);
    return moment(data).fromNow();
  };

  return (
    <div className="cards">
      {data.map((item, index) => (
        <div className="card" key={index}>
          <div className="card-image">
            {item.data.post_hint === "image" ? (
              <img src={item.data.url} alt="imagem do post" />
            ) : (
              <img src={reeditLogo} alt="logo reddit" />
            )}
          </div>
          <div className="card-info">
            <h4 className="card-info__title">{item.data.title}</h4>
            <span className="card-info__data">
              sent {date(item.data.created_utc)} by
              <span> {item.data.author}</span>
            </span>
            <a href={item.data.url} target="blank" className="card-info__link">
              link do post
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
