const { express } = require("../imports/module.import")
const { Productmodel } = require("../imports/model.import")
const { authorization } = require("../imports/middleware.import")
const { getProduct, getSingleProduct } = require("../imports/controller.import")

const productRouter = express.Router()

productRouter.route("/").get(getProduct)
productRouter.route("/:id").get(getSingleProduct)

module.exports = { productRouter }