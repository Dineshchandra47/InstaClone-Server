// const dotenv = require("dotenv");
const mongoose = require("mongoose");

// dotenv.config();

mongoose.set("strictQuery", false);

const connectToDb = () => {
  return mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("CONNECTED TO DB");
    })
    .catch((error) => {
      console.log(error.message);
    });
};

module.exports = connectToDb;
