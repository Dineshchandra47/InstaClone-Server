const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const connectToDb = require("./Connect to Db/connectDB")
const morgan = require("morgan")

dotenv.config()

const app = express()


// config app
app.use(cors())
app.use(express.json({ limit: "5mb" }))
app.use(morgan("common"))

// routes

app.use("/", require("./Routes/Posts"))

app.listen(process.env.PORT, async () => {
    await connectToDb()
    console.log(`Server is listining on port ${process.env.PORT}`);
})