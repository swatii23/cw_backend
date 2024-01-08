const { express } = require("./imports/module.import")
const { connection } = require("./imports/config.import")
const { authRouter, productRouter, cartRouter, wishlistRouter } = require("./imports/route.import")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors(
    {
        origin: ["http://127.0.0.1:5173"], // Add your frontend origin(s) here
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
    allowedHeaders: ["Content-Type", "Authorization"],
    }
))

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