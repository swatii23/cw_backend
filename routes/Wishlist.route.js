const { express } = require("../imports/module.import")
const { Wishlistmodel } = require("../imports/model.import")
const { authorization } = require("../imports/middleware.import")
const { addItemToWishlist, removeItemFromWishlist, getWishlistData } = require("../imports/controller.import")

const wishlistRouter = express.Router()

wishlistRouter.route("/").get(authorization, getWishlistData)
wishlistRouter.route("/:id").post(authorization, addItemToWishlist)
wishlistRouter.route("/:id").delete(authorization, removeItemFromWishlist)

module.exports = { wishlistRouter }