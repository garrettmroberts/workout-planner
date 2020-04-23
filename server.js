const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("./scripts/passport");
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const app = express();

// Init app middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Connects setver to routes
app.use(routes);

// Enables passport verification
app.use(session({ secret: 'apple butter', resave: true, saveUninitialize: true }));
app.use(passport.initialize());
app.use(passport.session());

// Connects to mongoDB
const mongooseOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};
mongoose.connect((process.env.MONGODB_URI || "mongodb://localhost/workoutPlannerDB"), mongooseOptions);

// Sets server to listen at PORT
app.listen(PORT, () => console.log(`API server listening at http://localhost:${PORT}`));