import React, { useState } from "react";
import API from "../../utils/API";
import { useStoreContext } from "../../utils/GlobalState";
import "./style.css";

function GoalsForm() {
  const [formState, setFormState] = useState({
    goal: "",
    equipment: []
  });

  const [state, dispatch] = useStoreContext();

  function updateState(event) {
    // Prevents deafult
    event.preventDefault();

    // Saves key and value from target
    const type = event.target.dataset.type;
    const value = event.target.innerText;

    // Updates Goal
    if (type === "goal") {
      // Updates goal state
      setFormState({ ...formState, [type]: value });

      // Clears "active class from goals section"
      const buttons = document.querySelectorAll(".goalsbtn");
      buttons.forEach(button => {
        button.classList.remove("active");
      })

      // Makes event target active
      event.target.classList.add("active");

      // Updates equipment
    } else {
      // Toggles active class
      event.target.classList.toggle("active");

      // Adds value to equipment state if recently made active
      if (event.target.classList.contains("active")) {
        setFormState({ ...formState, [type]: [...formState.equipment, value] });
      } else {
        // Here we remove from array if made inactive
        const idx = formState.equipment.indexOf(value);

        // A copy of equipment is created, spliced, and placed into equipment
        let newArr = formState.equipment
        formState.equipment.splice(idx, 1);
        setFormState({ ...formState, [type]: newArr });
      }
    };
  };

  function handleFormSubmit(event) {
    // Prevents event default
    event.preventDefault();


    // Clears form
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
      button.classList.remove("active");
    });

    // Updates the active user's data in global state
    let updatedUser = state.currentUser;
    updatedUser.goal = formState.goal;
    updatedUser.equipment = formState.equipment;
    dispatch({ type: 'updateUser', payload: updatedUser });

    // Updates active user's info in DB
    const id = state.currentUser._id;
    const userData = formState;
    API.updateUser(userData, id);

    // Generates a workout
    buildCalendar();
  };

  const buildCalendar = () => {
    API.getWorkouts()
      // res.data gets all workouts
      .then(res => {
        // Filters exercises to ones included in user's available equipment
        let filtered = [];
        if (state.currentUser.equipment.length > 0) {
          state.currentUser.equipment.forEach(item => {
            res.data.forEach(data => {
              // Adds to filtered array if user has correct equipment.
              if (data.equipment.join("") === item.toLowerCase()) {
                filtered.push(data);
              };
            });
          });
          // Adds bodyweight workouts after filtering by available equipment.
          res.data.forEach(data => {
            if (data.equipment.join("") === "") {
              filtered.push(data);
            };
          });
          // If no equipment selected, only bodyeight exercises are added
        } else {
          res.data.forEach(data => {
            if (data.equipment.join("") === "") {
              filtered.push(data);
            };
          });
        };

        const exercisesSortedByDate = collectExerciseDays(filtered);
        const userCalendar = buildCalendarDays(exercisesSortedByDate);
        const finishedCalendar = addReps(userCalendar);

        
        // Updates the active user's calendar in global state
        let updatedUser = state.currentUser;
        updatedUser.calendar = finishedCalendar;
        dispatch({ type: 'updateUser', payload: updatedUser });

        // Updates active user's info in DB
        const id = state.currentUser._id;
        API.updateUser({calendar: finishedCalendar}, id);
      });
  };

  const collectExerciseDays = exercises => {
    // Creates array of muscle groups to hit
    let muscleGroups = [];
    exercises.forEach(exercise => {
      muscleGroups.push(exercise.muscleGroup.join(""));
    });

    // Removes redundant muscles
    const uniqueMuscleGroups = muscleGroups.filter((muscle, index, self) => {
      return index === self.indexOf(muscle);
    })

    // Sorts muscle groups available into different arrays
    let chestAndTricepsMuscles = [];
    let legMuscles = [];
    let backAndBicepMuscles = [];
    let cardio = [];
    uniqueMuscleGroups.forEach((muscle) => {
      if (muscle === "chest" || muscle === "triceps" || muscle === "shoulders" || muscle === "forearms") {
        chestAndTricepsMuscles.push(muscle);
      } else if (muscle === "hamstrings" || muscle === "quadriceps" || muscle === "calves") {
        legMuscles.push(muscle);
      } else if (muscle === "lats" || muscle === "biceps" || muscle === "middle back" || muscle === "traps" || muscle === "lower back") {
        backAndBicepMuscles.push(muscle)
      } else {
        cardio.push(muscle);
      };
    });

    let chestExercises = [];
    let legExercises = [];
    let backExerises = [];
    let cardioExercises = [];
    exercises.forEach((exercise) => {
      if (chestAndTricepsMuscles.includes(exercise.muscleGroup.join(""))) {
        chestExercises.push(exercise);
      } else if (legMuscles.includes(exercise.muscleGroup.join(""))) {
        legExercises.push(exercise);
      } else if (backAndBicepMuscles.includes(exercise.muscleGroup.join(""))) {
        backExerises.push(exercise);
      } else {
        cardioExercises.push(exercise);
      }
    })

    let sortedExercises = {
      chestAndBiceps: chestExercises,
      legs: legExercises,
      backAndTriceps: backExerises,
      cardio: cardioExercises
    };

    return sortedExercises;
  };

  // Helper function for accessing days beyond today
  Date.prototype.nextDay = function (days) {
    let date = new Date(this.valueOf());
    date.setDate(date.getDate() + 2);
    return date;
  }

  const buildCalendarDays = exercises => {
    let workoutCalendar = [];

    let exercisesArray = [
      exercises.chestAndBiceps, exercises.legs, exercises.backAndTriceps, exercises.cardio
    ];

    let today = new Date();
    let i = 0;
    let workoutType = 0;
    // Updates day by 2 30 times
    while (i < 30) {

      // Format the date to an easily readable string
      let readableDate = "";
      let monthNum = today.getMonth();
      switch (monthNum) {
        case 0:
          readableDate += "Jan";
          break;
        case 1:
          readableDate += "Feb";
          break;
        case 2:
          readableDate += "Mar";
          break;
        case 3:
          readableDate += "Apr";
          break;
        case 4:
          readableDate += "May";
          break;
        case 5:
          readableDate += "Jun";
          break;
        case 6:
          readableDate += "Jul";
          break;
        case 7:
          readableDate += "Aug";
          break;
        case 8:
          readableDate += "Sept";
          break;
        case 9:
          readableDate += "Oct";
          break;
        case 10:
          readableDate += "Nov";
          break;
        case 11:
          readableDate += "Dec";
          break;
      }
      readableDate += " " + today.getDate();

      let possibleExercises = exercisesArray[workoutType];
      let dayExercises = [];

      // Inserts five workouts a day if strength, three if cardio/abs day
      let j = 0;
      if (workoutType !== 3) {
        while (j < 5) {
          let rand = Math.floor(Math.random() * exercisesArray[workoutType].length);
          dayExercises.push(possibleExercises[rand]);
          j++;
        }
      } else {
        while (j < 3) {
          let rand = Math.floor(Math.random() * exercisesArray[workoutType].length);
          dayExercises.push(possibleExercises[rand]);
          j++;
        }
      }

      let dayPlan = {
        day: readableDate,
        jsDate: today,
        workouts: dayExercises

      };

      workoutCalendar.push(dayPlan);
      // Increments to next day
      let next = today.nextDay();
      today = next;
      workoutType = (workoutType + 1) % exercisesArray.length;
      i++;
    };

    return workoutCalendar;
  };

  const addReps = calendar => {
    if (state.currentUser.goal === "Bulk up") {
      calendar.forEach(({ workouts }) => {
        workouts.forEach(workout => {
          if (workout.category === "strength") {
            const sets = Math.floor(Math.random() * (5 - 3) + 3);
            const reps = Math.floor(Math.random() * (12 - 8) + 8);
            workout.sets = `${sets} x ${reps}`;
          } else {
            const time = Math.floor(Math.random() * (60 - 40) + 40);
            workout.time = `${time} minutes`;
          }
        });
      });
    } else {
      calendar.forEach(({ workouts }) => {
        workouts.forEach(workout => {
          if (workout.category === "strength") {
            const sets = Math.floor(Math.random() * (6 - 4) + 4);
            const reps = Math.floor(Math.random() * (20 - 15) + 15);
            workout.sets = `${sets} x ${reps}`;
          } else {
            const time = Math.floor(Math.random() * (70 - 50) + 50);
            workout.time = `${time} minutes`;
          }
        });
      });
    }

    return calendar;
  };

  return (
    <div id="content-container">
      <form>
        <div className="form-header">
          <h3>Let us help you build a workout regimen.</h3>
        </div>
        <div className="form-header">
          <h4>What is your main goal?</h4>
        </div>
        <div className="buttons-section">
          <button data-type="goal" onClick={updateState} className="goalsbtn">Bulk up</button>
          <button data-type="goal" onClick={updateState} className="goalsbtn">Cut weight</button>
        </div>
        <div className="form-header">
          <h4>What equipment do you have available?</h4>
        </div>
        <div className="buttons-section">
          <button data-type="equipment" onClick={updateState} className="equipbtn">Barbell</button>
          <button data-type="equipment" onClick={updateState} className="equipbtn">Dumbbell</button>
          <button data-type="equipment" onClick={updateState} className="equipbtn">Exercise Ball</button>
          <button data-type="equipment" onClick={updateState} className="equipbtn">Curl Bar</button>
          <button data-type="equipment" onClick={updateState} className="equipbtn">Machine</button>
          <button data-type="equipment" onClick={updateState} className="equipbtn">Bicycle</button>
        </div>
        <div className="buttons-section">
          <button className="btn btn-primary" onClick={handleFormSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default GoalsForm;