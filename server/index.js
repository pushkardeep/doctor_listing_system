require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to DB:", err);
  });
