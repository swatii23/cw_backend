const { express } = require("./imports/modules.imports")
const { connection } = require("./imports/configs.imports")
const { authRouter, productRouter } = require("./imports/routes.imports")
const cors = require("cors")

const app = express()

app.use(express.json())
// app.use(cors())

app.use("/auth", authRouter)
app.use("/products", productRouter)

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