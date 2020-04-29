import React from "react";
import axios from "axios";
import Card from "../Card";

function WorkoutCalendar() {

  {axios.get("/api/users/5ea7861272cd772da6b106d5")
    .then(user => {
      const userCalendar = user.data.calendar;
      console.log("USER CALENDAR: ", userCalendar);
      // Return a card for each entry in the userCalendar
    })
    .catch(err => console.log(err));}

    return(
      <Card />
    )

  
}

export default WorkoutCalendar;