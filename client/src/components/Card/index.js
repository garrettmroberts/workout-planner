import React from "react";
import "./style.css"

function Card({ day, workouts, jsDate }) {
  const workoutSection = workouts.map(workout => {
    if (workout.category === "strength") {
      return <li className="list-group-item" key={Math.floor(Math.random() * 100000)}>
        <strong>{workout.name}</strong> - {workout.sets}
      </li>
    } else {
      return <li className="list-group-item" key={Math.floor(Math.random() * 100000)}>
        <strong>{workout.name}</strong> - {workout.time}
      </li >
    }
  })

  return(
    <div className="card border-dark mb-3">
      <div className="card-header">{day}</div>
      <div className="card-body text-dark">
        <ul className="list-group list-group-flush">
          {workoutSection}
        </ul>
      </div>
    </div>
  )
}

export default Card;