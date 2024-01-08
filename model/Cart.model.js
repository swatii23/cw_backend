const { mongoose } = require("../imports/module.import")

const cartSchema = mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    quantity: {
        type: Number
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

const Cartmodel = mongoose.model("cart", cartSchema)

module.exports = { Cartmodel }