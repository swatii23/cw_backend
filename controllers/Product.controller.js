const { Productmodel } = require("../imports/model.import")
const { asyncHandler } = require("../imports/module.import")

const getProduct = asyncHandler(async(req, res) => {
    try {
        const products = await Productmodel.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(400).send("Something went wrong. Please try again.")
        console.log(error)
    }
})

const getSingleProduct = asyncHandler(async(req, res) => {
    const _id = req.params.id
    try {
        const product = await Productmodel.findById(_id)
        res.status(200).json(product)
    } catch (error) {
        res.status(400).send("Something went wrong. Please try again.")
    }
})

module.exports = { 
    getProduct, 
    getSingleProduct }