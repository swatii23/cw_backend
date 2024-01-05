const express = require("../imports/module.import")
const { signupController, loginController } = require("../imports/controller.import")

const authRouter = express.Router()

authRouter.post("/signup", signupController)

authRouter.post("login", loginController)

module.exports = { authRouter }