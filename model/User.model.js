const { mongoose } = require("../imports/module.import")

const userSchema = mongoose.Schema({
    name: { 
        type: String,
        required: true
    },

    email: { 
        type: String,
        required: true,
        unique: true
    },

    password: { 
        type: String,
        required: true
    },
    cart: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            },
            quantity: {
                type: Number
            }
        }
    ],
})

const Usermodel = mongoose.model("user", userSchema)

module.exports = Usermodel