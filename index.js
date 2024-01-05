const express = require("express")
require("dotenv").config()
const cors = require("cors")

const connection = require("./config/db")

const app = express()

app.use(express.json())
app.use(cors(
    {
        origin: "*"
    }
))


const port = process.env.PORT || 8080
app.listen(port, async() => {
    try {
        await connection;
        console.log("connection established")        
    } catch (error) {
        console.error(error)
    }
    console.log(`Server is running on ${port}`)
})