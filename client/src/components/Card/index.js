import React from "react";
import "./style.css"

function Card(props) {
  return(
    <div className="card border-dark mb-3">
      <div className="card-header">Header</div>
      <div className="card-body text-dark">
        <ul className="list-group">
          <li>A thing</li>
          <li>Another thing</li>
          <li>And another</li>
        </ul>
      </div>
    </div>
  )
}

export default Card;