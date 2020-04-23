const mongoose = require("mongoose");
const db = require("../models");


const mongooseOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

mongoose.connect((process.env.MONGODB_URI || "mongodb://localhost/workoutPlannerDB"), mongooseOptions);

const userSeed = [
  {
    email: "gurtdegurt@gurtmail.com",
    password: "ahdc423H",
    firstName: "Gurt",
    lastName: "deGurt"
  },
  {
    email: "chimichanga@imallama.com",
    password: "12345678",
    firstName: "chimichanga",
    lastName: "imallama"
  }
]

const workoutSeed = [
  {
    name: "bench press",
    category: "strength",
    muscleGroup: ["Chest"],
    equipment: "bench press"
  },
  {
    name: "incline bench press",
    category: "strength",
    muscleGroup: ["Chest"],
    equipment: "bench press"
  },
  {
    name: "flat chest press",
    category: "strength",
    muscleGroup: ["Chest"],
    equipment: "chest press machine"
  },
  {
    name: "incline chest press",
    category: "strength",
    muscleGroup: ["Chest"],
    equipment: "chest press machine"
  },
  {
    name: "decline chest press",
    category: "strength",
    muscleGroup: ["Chest"],
    equipment: "chest press machine"
  },
  {
    name: "traditional pushup",
    category: "strength",
    muscleGroup: ["Chest"],
  }
];

db.Workout.deleteMany({})
  .then(() => db.Workout.collection.insertMany(workoutSeed))
  .then(data => {
    console.log(data.result.n + " workouts inserted.");
  })
  .catch(err => {
    console.error(err);
  });

  db.User.deleteMany({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
      console.log(data.result.n + " users inserted");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });