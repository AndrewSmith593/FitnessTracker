const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const db = require("./models");

const app = express();

app.use(logger("dev"));



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.FitnessTrackMongoAtlas, { useNewUrlParser: true });


// Connect to MongoDB
// mongoose
//   .connect(
//     'mongodb+srv://andrewsmith593:password1990@cluster0.alzhj.mongodb.net/fitnesstrackerdb?retryWrites=true&w=majority',
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log("MongoDB successfully connected"))
//   .catch(err => console.log(err));



// routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
