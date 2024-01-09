const { Cartmodel } = require("../imports/model.import")
const { asyncHandler } = require("../imports/module.import")


const addToCart = asyncHandler(async (req, res) => {
    const { userId } = req;
    const  productId  = req.params.id;

    try {
      // Check if the item is already in the cart for the specific user
      const existingCartItem = await Cartmodel.findOne({ userId, productId });

      if (existingCartItem) {
        // If the item is already in the cart, increase the quantity by 1
        existingCartItem.quantity += 1;
        await existingCartItem.save();
        res.json(existingCartItem);
      } else {
        // If the item is not in the cart, add a new cart item with quantity 1
        const newCartItem = await Cartmodel.create({ userId, productId });
        // await newCartItem.save();
        res.status(201).json(newCartItem);
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
)

const removeItemFromCart= asyncHandler( async (req, res) => {
    const { userId } = req;
    const  productId  = req.params.id;

    try {
      // Find the cart item for the specific user and product
      const cartItem = await Cartmodel.findOne({ userId, productId });

      if (!cartItem) {
        return res.status(404).json({ message: 'Cart item not found' });
      }

      // If the quantity is greater than 1, decrement it; otherwise, remove the item
      if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
        await cartItem.save();
        res.json(cartItem);
      } else {
        await cartItem.remove();
        res.status(200).json({ message: 'Cart item removed successfully' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
)

const getCartData= asyncHandler( async (req, res) => {
    const { userId } = req;

    try {
      // Find all cart items for the specific user
      const cartItems = await Cartmodel.find({ userId });

      res.status(200).json(cartItems);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
)

module.exports = {
    getCartData,
    addToCart,
    removeItemFromCart
}