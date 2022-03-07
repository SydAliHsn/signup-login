const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = require("./app");
const User = require("./models/userModel");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB)
  .then(() => console.log("Connection made successfully with database."));

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Listening to port: ${PORT}`));
