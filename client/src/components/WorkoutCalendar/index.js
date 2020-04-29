import React from "react";
import axios from "axios";
import { useStoreContext, StoreProvider } from "../../utils/GlobalState";
import Card from "../Card";

function WorkoutCalendar() {
  console.log("This is the calendar component.");

  let dummyData = [
    {
      day: 4 - 28,
      workouts: [
        {
          name: "workout1",
          sets: "3x10"
        },
        {
          name: "workout2",
          sets: "3x10"
        },
        {
          name: "workout3",
          sets: "3x10"
        }
      ]
    }
  ]

  axios.get("/api/users/5ea7861272cd772da6b106d5")
    .then(user => {
      const userCalendar = user.data.calendar;
      console.log("USER CALENDAR: ", userCalendar);
      // Return a card for each entry in the userCalendar
    })
    .catch(err => console.log(err));

  return(
    <Card />
  )

  
}

export default WorkoutCalendar;