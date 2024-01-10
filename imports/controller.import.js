const {signupController, loginController} = require("../controllers/Auth.controller")
const { getProduct, getSingleProduct } = require("../controllers/Product.controller")
const { getCartData, addToCart, removeItemFromCart, adjustQuantityInCart } = require("../controllers/Cart.controller")
const { addItemToWishlist, removeItemFromWishlist, getWishlistData } = require("../controllers/Wishlist.controller")

module.exports = { 
    signupController, 
    loginController,
    getProduct,
    getSingleProduct,
    getCartData,
    addToCart,
    removeItemFromCart,
    adjustQuantityInCart,
    addItemToWishlist,
    removeItemFromWishlist,
    getWishlistData
}