const { mongoose } = require("../imports/module.import")

const productSchema = mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    currency: {
        type: String,
        default: "INR"
    },
    material: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    review: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    description: [
        {
            short: {
                type: String,
                required: true
            },
            long: {
                type: String,
                required: true
            }
        }
    ],
    images: {
        type: [String],
        required: true
    }
})

const Productmodel = mongoose.model("product", productSchema)

module.exports = { Productmodel }