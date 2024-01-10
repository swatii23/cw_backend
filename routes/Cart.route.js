const { express } = require("../imports/module.import")
const { Cartmodel } = require("../imports/model.import")
const { authorization } = require("../imports/middleware.import")
const { addToCart, removeItemFromCart, getCartData, adjustQuantityInCart } = require("../imports/controller.import")

const cartRouter = express.Router()

cartRouter.route("/").get(authorization, getCartData)
cartRouter.route("/:id").post(authorization, addToCart)
cartRouter.route("/:id").delete(authorization, removeItemFromCart)
cartRouter.route("/:id").patch(authorization, adjustQuantityInCart)

module.exports = { cartRouter }