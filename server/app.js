const express = require("express");
const app = express();

const cors = require("cors");

app.use(
  cors({
    origin: process.env.ORIGIN_URI,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const doctorRoute = require("./routes/doctor.route");

app.use("/doctor", doctorRoute);

app.get("/", (req, res) => {
  console.log(process.env.ORIGIN_URI);
  res.send("I am working");
});

module.exports = app;
