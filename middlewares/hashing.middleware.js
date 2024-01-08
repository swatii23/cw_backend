const { bcrypt } = require("../imports/modules.imports")

const createHash = async(req, res, next) => {
    const { password } = req.body

    req.body.password = await bcrypt.hash(password, 5)

    next()
}

module.exports = { createHash }