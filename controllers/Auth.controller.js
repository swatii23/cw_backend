const { asyncHandler } = require("../imports/module.import")
const { Usermodel } = require("../imports/model.import")
const { token } = require("../imports/config.import")

const loginController = asyncHandler(async(req, res) => {
    const { email, password } = req.body

    const user = await Usermodel.findOne({ email })

    if(user && (await user.matchPassword(password))) {
        res.status(200).json({
            _id: user._id,
            email: user.email,
            token: token(user._id)
        })
    }
    else {
        res.status(401)
        throw new Error("Invalid Email or Password")
    }
})