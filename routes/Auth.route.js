const { express } = require("../imports/module.import")
const { signupController, loginController } = require("../imports/controller.import")
const { createHash } = require("../imports/middleware.import")

const authRouter = express.Router()

authRouter.post("/signup", createHash, signupController)

authRouter.post("/login", loginController)

module.exports = { authRouter }