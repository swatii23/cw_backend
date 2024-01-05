const express = require("express")

const router = express.Router()

router.post("/signup", async(req, res) => {
    try {
        
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
})