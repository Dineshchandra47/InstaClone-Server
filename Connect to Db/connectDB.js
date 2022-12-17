const mongoose = require("mongoose")

mongoose.set('strictQuery', false);

const connectToDb = () => {
    return mongoose.connect(process.env.DBURL)
        .then(() => {
            console.log("CONNECTED TO DB");
        }).catch((error) => {
            console.log(error.message);
        })
}

module.exports = connectToDb;