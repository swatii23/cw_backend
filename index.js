const { express } = require("./imports/module.import")
const { connection } = require("./imports/config.import")
const { authRouter, productRouter, cartRouter, wishlistRouter } = require("./imports/route.import")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors(
    // {
    //     origin: "*"
    // }
))

app.get("/", (req, res) => {
    res.send("API is working.")
})
app.use("/auth", authRouter)
app.use("/products", productRouter)
app.use("/cart", cartRouter)
app.use("/wishlist", wishlistRouter)

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