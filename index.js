const { express, cors } = require("./imports/module.import")
const { connection } = require("./imports/config.import")
const { authRouter } = require("./imports/route.import")

const app = express()

app.use(express.json())
app.use(cors(
    {
        origin: "*"
    }
))

app.use("/auth", authRouter)

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