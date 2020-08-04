const router = require("express").Router();
const Workout = require("../models/Workout.js")

// route to 
router.post("/api/", ({ body }, res) => {
  Workout.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// route to add a workout
router.post("/api/addworkout", ({ body }, res) => {
  Workout.insert(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// route to get all workouts
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    // .sort({ date: -1 })
    .then(workouts => {
      res.json(workouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
