const mongoose = require("mongoose");
const db = require("../models");


const mongooseOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

mongoose.connect((process.env.MONGODB_URI || "mongodb://localhost/workoutPlannerDB"), mongooseOptions);

const workoutSeed = [
  {
    name: "barbell bench press",
    category: "strength",
    muscleGroup: ["chest"],
    equipment: "barbell"
  },
  {
    name: "dumbbell bench press",
    category: "strength",
    muscleGroup: ["chest"],
    equipment: "dumbbell"
  },
  {
    name: "standard pushup",
    category: "strength",
    muscleGroup: ["chest"],
  },
  {
    name: "dumbbell flyes",
    category: "strength",
    muscleGroup: ["chest"],
    equipment: "dumbbell"
  },
  {
    name: "incline dumbbell press",
    category: "strength",
    muscleGroup: ["chest"],
    equipment: "dumbbell"
  },
  {
    name: " lower cable crossover",
    category: "strength",
    muscleGroup: ["chest"],
    equipment: "cable"
  },
  {
    name: "decline dumbbell flyes",
    category: "strength",
    muscleGroup: ["chest"],
    equipment: "dumbbell"
  },
  {
    name: "wide grip barbell bench press",
    category: "strength",
    muscleGroup: ["chest"],
    equipment: "barbell"
  },
  {
    name: "weighted pull ups",
    category: "strength",
    muscleGroup: ["lats"]
  },
  {
    name: "pull up",
    category: "strength",
    muscleGroup: ["lats"]
  },
  {
    name: "v-bar pulldown",
    category: "strength",
    muscleGroup: ["lats"],
    equipment: "cable"
  },
  {
    name: "wide grip pull up",
    category: "strength",
    muscleGroup: ["lats"]
  },
  {
    name: " muscle up",
    category: "strength",
    muscleGroup: ["lats"]
  },
  {
    name: "wide grip lat pulldown",
    category: "strength",
    muscleGroup: ["lats"],
    equipment: "cable"
  },
  {
    name: "single-leg press",
    category: "strength",
    muscleGroup: ["quadriceps"],
    equipment: "machine"
  },
  {
    name: "barbell full squat",
    category: "strength",
    muscleGroup: ["quadriceps"],
    equipment: "barbell"
  },
  {
    name: "tire flip",
    category: "strength",
    muscleGroup: ["quadriceps"],
    equipment: "tire"
  },
  {
    name: "push press",
    category: "strength",
    muscleGroup: ["quadriceps"],
    equipment: "barbell"
  },
  {
    name: "snatch",
    category: "strength",
    muscleGroup: ["quadriceps"],
    equipment: "barbell"
  },
  {
    name: "jump rope",
    category: "strength",
    muscleGroup: ["quadriceps"]
  },
  {
    name: "walking lunges",
    category: "strength",
    muscleGroup: ["quadriceps"],
    equipment: "barbell"
  },
  {
    name: "squat",
    category: "strength",
    muscleGroup: ["quadriceps"],
    equipment: "barbell"
  },
  {
    name: "step mill",
    category: "strength",
    muscleGroup: ["quadriceps"],
    equipment: "machine"
  },
  {
    name: "barbell deadlift",
    category: "strength",
    muscleGroup: ["hamstrings"],
    equipment: "barbell"
  },
  {
    name: "romanian deadlift with dumbbells",
    category: "strength",
    muscleGroup: ["hamstrings"],
    equipment: "dumbbell"
  },
  {
    name: "clean deadlift deadlift",
    category: "strength",
    muscleGroup: ["hamstrings"],
    equipment: "barbell"
  },
  {
    name: "power clean",
    category: "strength",
    muscleGroup: ["hamstrings"],
    equipment: "barbell"
  },
  {
    name: "stiff-legged dumbbell deadlift",
    category: "strength",
    muscleGroup: ["hamstrings"],
    equipment: "dumbbell"
  },
  {
    name: "ball leg curl",
    category: "strength",
    muscleGroup: ["hamstrings"],
    equipment: "exercise ball"
  },
  {
    name: "power clean",
    category: "strength",
    muscleGroup: ["hamstrings"],
    equipment: "barbell"
  },
  {
    name: "body weight squat",
    category: "strength",
    muscleGroup: ["hamstrings"]
  },
  {
    name: "smith machine calf raise",
    category: "strength",
    muscleGroup: ["calves"],
    equipment: "machine"
  },
  {
    name: "standing dumbbell calf raise",
    category: "strength",
    muscleGroup: ["calves"],
    equipment: "dumbbell"
  },
  {
    name: "calf press on leg press machine",
    category: "strength",
    muscleGroup: ["calves"],
    equipment: "machine"
  },
  {
    name: "calf press",
    category: "strength",
    muscleGroup: ["calves"],
    equipment: "machine"
  },
  {
    name: "standing barbell calf raise",
    category: "strength",
    muscleGroup: ["calves"],
    equipment: "barbell"
  },
  {
    name: "ankle circles",
    category: "strength",
    muscleGroup: ["calves"],
  },
  {
    name: "bodyweight calf raise",
    category: "strength",
    muscleGroup: ["calves"]
  },
  {
    name: "dips",
    category: "strength",
    muscleGroup: ["triceps"]
  },
  {
    name: "chair dips",
    category: "strength",
    muscleGroup: ["triceps"]
  },
  {
    name: "tricep pushdown",
    category: "strength",
    muscleGroup: ["triceps"],
    equipment: "cable"
  },
  {
    name: "EZ-bar skullcrusher",
    category: "strength",
    muscleGroup: ["triceps"],
    equipment: "curl bar"
  },
  {
    name: "reverse grip tricep pushdown",
    category: "strength",
    muscleGroup: ["triceps"],
    equipment: "cable"
  },
  {
    name: "standing dumbbell tricep extension",
    category: "strength",
    muscleGroup: ["triceps"],
    equipment: "dumbbell"
  },
  {
    name: "seated triceps press",
    category: "strength",
    muscleGroup: ["triceps"],
    equipment: "dumbbell"
  },
  {
    name: "smith machine shrug",
    category: "strength",
    muscleGroup: ["traps"],
    equipment: "machine"
  },
  {
    name: "dumbbell shrug",
    category: "strength",
    muscleGroup: ["traps"],
    equipment: "dumbbell"
  },
  {
    name: "standing dumbbell upright row",
    category: "strength",
    muscleGroup: ["traps"],
    equipment: "dumbbell"
  },
  {
    name: "kettlebell sumo high pull",
    category: "strength",
    muscleGroup: ["traps"],
    equipment: "kettlebell"
  },
  {
    name: "calf machine shoulder shrug",
    category: "strength",
    muscleGroup: ["traps"],
    equipment: "machine"
  },
  {
    name: "barbell shrug",
    category: "strength",
    muscleGroup: ["traps"],
    equipment: "barbell"
  },
  {
    name: "upright cable row",
    category: "strength",
    muscleGroup: ["traps"],
    equipment: "cable"
  },
  {
    name: "cable shrugs",
    category: "strength",
    muscleGroup: ["traps"],
    equipment: "cable"
  },
  {
    name: "upright row w/ bands",
    category: "strength",
    muscleGroup: ["traps"],
    equipment: "bands"
  },
  {
    name: "clean shrug",
    category: "strength",
    muscleGroup: ["traps"],
    equipment: "barbell"
  },
  {
    name: "scapular pullup",
    category: "strength",
    muscleGroup: ["traps"]
  },
  {
    name: "clean press",
    category: "strength",
    muscleGroup: ["shoulders"],
    equipment: "barbell"
  },
  {
    name: "lateral raise",
    category: "strength",
    muscleGroup: ["shoulders"],
    equipment: "dumbbell"
  },
  {
    name: "front raise",
    category: "strength",
    muscleGroup: ["shoulders"],
    equipment: "dumbbell"
  },
  {
    name: "arnold press",
    category: "strength",
    muscleGroup: ["shoulders"],
    equipment: "dumbbell"
  },
  {
    name: "clean and jerk",
    category: "strength",
    muscleGroup: ["shoulders"],
    equipment: "barbell"
  },
  {
    name: "one arm kettlebell push press",
    category: "strength",
    muscleGroup: ["shoulders"],
    equipment: "kettlebell"
  },
  {
    name: "military press",
    category: "strength",
    muscleGroup: ["shoulders"],
    equipment: "barbell"
  },
  {
    name: "seated dumbbell press",
    category: "strength",
    muscleGroup: ["shoulders"],
    equipment: "dumbbell"
  },
  {
    name: "standing dumbbell press",
    category: "strength",
    muscleGroup: ["shoulders"],
    equipment: "dumbbell"
  },
  {
    name: "one arm side laterals",
    category: "strength",
    muscleGroup: ["shoulders"],
    equipment: "dumbbell"
  },
  {
    name: "reverse flyes",
    category: "strength",
    muscleGroup: ["shoulders"],
    equipment: "dumbbell"
  },
  {
    name: "one-arm medicine ball slam",
    category: "strength",
    muscleGroup: ["abdominals"],
    equipment: "medicine ball"
  },
  {
    name: "plank",
    category: "strength",
    muscleGroup: ["abdominals"]
  },
  {
    name: "leg raises",
    category: "strength",
    muscleGroup: ["abdominals"]
  },
  {
    name: "dumbbell v-sit cross jab",
    category: "strength",
    muscleGroup: ["abdominals"],
    equipment: "dumbbell"
  },
  {
    name: "standing cable lift",
    category: "strength",
    muscleGroup: ["abdominals"],
    equipment: "cable"
  },
  {
    name: "cross-body crunch",
    category: "strength",
    muscleGroup: ["abdominals"]
  },
  {
    name: "decline crunch",
    category: "strength",
    muscleGroup: ["abdominals"]
  },
  {
    name: "incline hammer curls",
    category: "strength",
    muscleGroup: ["biceps"],
    equipment: "dumbbell"
  },
  {
    name: "wide-grip standing barbell curl",
    category: "strength",
    muscleGroup: ["biceps"],
    equipment: "barbell"
  },
  {
    name: "hammer curls",
    category: "strength",
    muscleGroup: ["biceps"],
    equipment: "dumbbell"
  },
  {
    name: "bicep curl to press",
    category: "strength",
    muscleGroup: ["biceps"],
    equipment: "dumbbell"
  },
  {
    name: "barbell curl",
    category: "strength",
    muscleGroup: ["biceps"],
    equipment: "barbell"
  },
  {
    name: "overhead cable curl",
    category: "strength",
    muscleGroup: ["biceps"],
    equipment: "cable"
  },
  {
    name: "machine preacher curl",
    category: "strength",
    muscleGroup: ["biceps"],
    equipment: "machine"
  },
  {
    name: "jump rope",
    category: "cardio",
    muscleGroup: []
  },
  {
    name: "step mill",
    category: "cardio",
    muscleGroup: [],
    equipment: "machine"
  },
  {
    name: "rowing, stationary",
    category: "cardio",
    muscleGroup: [],
    equipment: "machine"
  },
  {
    name: "elliptical trainer",
    category: "cardio",
    muscleGroup: [],
    equipment: "machine"
  },
  {
    name: "stairmaster",
    category: "cardio",
    muscleGroup: [],
    equipment: "machine"
  },
  {
    name: "burpee",
    category: "cardio",
    muscleGroup: []
  },
  {
    name: "trail running",
    category: "cardio",
    muscleGroup: []
  },
  {
    name: "walking",
    category: "cardio",
    muscleGroup: []
  },
  {
    name: "track running",
    category: "cardio",
    muscleGroup: []
  },
  {
    name: "fartleks",
    category: "cardio",
    muscleGroup: []
  },
  {
    name: "running, treadmill",
    category: "cardio",
    muscleGroup: [],
    equipment: "machine"
  },
  {
    name: "bicycling, stationary",
    category: "cardio",
    muscleGroup: [],
    equipment: "machine"
  },
  {
    name: "biking",
    category: "cardio",
    muscleGroup: [],
    equipment: "bicycle"
  },
  {
    name: "mountain climbers",
    category: "cardio",
    muscleGroup: []
  },
  {
    name: "sledgehammer swings",
    category: "cardio",
    muscleGroup: [],
    equipment: "other"
  },
  {
    name: "jumping jack",
    category: "cardio",
    muscleGroup: []
  },
  {
    name: "rickshaw carry",
    category: "strength",
    muscleGroup: ["forearms"],
    equipment: "other"
  },
  {
    name: "wrist rotations with straight bar",
    category: "strength",
    muscleGroup: ["forearms"],
    equipment: "curl bar"
  },
  {
    name: "farmers walk",
    category: "strength",
    muscleGroup: ["forearms"]
  },
  {
    name: "finger curls",
    category: "strength",
    muscleGroup: ["forearms"],
    equipment: "barbell"
  },
  {
    name: "t-bar row",
    category: "strength",
    muscleGroup: ["middle back"],
    equipment: "other"
  },
  {
    name: "one-arm dumbbell row",
    category: "strength",
    muscleGroup: ["middle back"],
    equipment: "dumbbell"
  },
  {
    name: "tdumbbell incline row",
    category: "strength",
    muscleGroup: ["middle back"],
    equipment: "other"
  },
  {
    name: "bent over barbell row row",
    category: "strength",
    muscleGroup: ["middle back"],
    equipment: "barbell"
  },
  {
    name: "superman",
    category: "strength",
    muscleGroup: ["lower back"]
  },
  {
    name: "seated good morings",
    category: "strength",
    muscleGroup: ["lower back"],
    equipment: "barbell"
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
