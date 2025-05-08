const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  await mongoose
    .connect(process.env.MongoDB_URI)
    .then(() => {
      console.log("DB Connected");
    })
    .catch((err) => {
      console.log("mongoose Err", err);
    });
};

module.exports = connectDB;
