import React from "react";
import Card from "./Card";
import "../styles/cards.css";


export default function Cards({ data }) {
 
  return (
    <div className="cards">
      {data && data.map(post => (
        <Card post={post} key ={post.id}/>
      ))}
    </div>
  );
}
