const { express } = require("../imports/modules.imports")
const { signupController, loginController } = require("../imports/controllers.imports")
const { createHash } = require("../imports/middleware.imports")

const authRouter = express.Router()

authRouter.post("/signup", signupController)

authRouter.post("/login", loginController)

module.exports = { authRouter }