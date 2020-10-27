const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date(),
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Please select an exercise",
        },
        name: {
          type: String,
          trim: true,
          required: "please enter a name for your exercise",
        },
        duration: {
          type: Number,
          required: "How long did you work out?",
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Workout = mongoose.model("fitnesstracker", workoutSchema);

module.exports = Workout;