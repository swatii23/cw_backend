const express = require("express")

const authRouter = express.Router()


authRouter.post("/signup", async(req, res) => {
    try {
        
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
})

authRouter.post("login", () => {

})

module.exports = { authRouter }