const { express, cors } = require("./imports/modules.imports")
const  connection  = require("./config/db")
const { authorize } = require("./imports/middleware.imports")
const { productRoutes, authRoutes } = require("./imports/routes.imports")


const app = express()

app.use(express.json())
app.use(cors())

app.use("/", authRoutes)
app.use("/products", productRoutes)

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