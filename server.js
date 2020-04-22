const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const mongooseOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

app.use(routes);

mongoose.connect((process.env.MONGODB_URI || "mongodb://localhost/workoutPlannerDB"), mongooseOptions);

app.listen(PORT, () => console.log(`API server listening at http://localhost:${PORT}`));