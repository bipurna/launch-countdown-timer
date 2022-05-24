import React from "react";
import "./Card.css";
function Card({ count }) {
  return (
    <div className="Card">
      <div className="block">
        <div className="top-page">
        <p>{count}</p>
        </div>
        
        <div className="all-separator">
          <div className="holef"></div>
          <div className="separator"></div>
          <div className="holeb"></div>
        </div>

        <div className="bottom-page"></div>
      </div>
      
    </div>
  );
}

export default Card;
