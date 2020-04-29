import React from "react";
import "./style.css"

function Card(props) {
  return(
    <div className="card border-dark mb-3">
      <div className="card-header">Header</div>
      <div className="card-body text-dark">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">A thing</li>
          <li className="list-group-item">Another thing</li>
          <li className="list-group-item">And another</li>
        </ul>
      </div>
    </div>
  )
}

export default Card;