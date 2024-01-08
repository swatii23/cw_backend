const { authRouter } = require("../routes/Auth.route")
const { productRouter } = require("../routes/Product.route")
const { cartRouter } = require("../routes/Cart.route")
const { wishlistRouter } = require("../routes/Wishlist.route")

module.exports = { authRouter, productRouter, cartRouter, wishlistRouter }