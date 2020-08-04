const router = require("express").Router();
const Workout = require("../models/Workout.js")



// route to add a workout
router.post("/exercise", ({ body }, res) => {
  Workout.insert(body)
    .then(newWorkout => {
      res.json(newWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// route to get all workouts
router.get("/exercise", (req, res) => {
  Workout.find({})
    // .sort({ date: -1 })
    .then(workouts => {
      res.json(workouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

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
