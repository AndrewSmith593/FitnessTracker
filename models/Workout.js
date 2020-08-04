const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: {type: Date, default: () => new Date},
    exercises: [
      {
        type: {type: String, required: "add an exercise type", trim: true},
        name: {type: String, required: "add an exercise name", trim: true},
        duration: {type: Number, required: "add a duration", trim: true},
        weight: {type: Number, required: "add weight please", trim: true},
        reps: {type: Number, required: "add a number of reps", trim: true},
        sets: {type: Number, required: "add your sets please", trim: true}
      }
    ]
  }
);

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;