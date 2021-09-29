import React from "react";
import Card from "./Card";
import "../styles/cards.css";

export default function Cards({ data, after, loadMore }) {
  return (
    <div className="cards">
      {data && data.map((post) => <Card post={post} key={post.data.name} />)}
      {after && (
        <div className="button-after">
          <button className="cards-button" onClick={() => loadMore()}>
            Ver Mais
          </button>
        </div>
      )}
    </div>
  );
}
