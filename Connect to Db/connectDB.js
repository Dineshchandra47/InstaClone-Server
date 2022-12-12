const mongoose = require("mongoose")

mongoose.set('strictQuery', false);

const connectToDb = () => {
    return mongoose.connect("mongodb+srv://Admin:Admin1234@instaclone.s6vytav.mongodb.net/InstaClone?retryWrites=true&w=majority")
        .then(() => {
            console.log("CONNECTED TO DB");
        }).catch((error) => {
            console.log(error.message);
        })
}

module.exports = connectToDb;