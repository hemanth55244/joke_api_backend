const express = require("express");
const app = express();

const Joke = require("./models/Joke");
const jokeRoute = require("./router/jokeRouter");
const connectDB = require("./config/db");
const authroute = require("./router/authRouter");

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

// Routes
app.use("/api/v2", jokeRoute);
app.use("/auth", authroute);

app.get("/", (req, res) => {
  res.send("Server is working");
});

const PORT = process.env.PORT_NUMBER || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port`);
});