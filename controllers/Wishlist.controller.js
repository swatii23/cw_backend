// wishlistController.js
const { Wishlistmodel } = require('../imports/models.imports');
const { asyncHandler } = require("../imports/modules.imports")


  // Get wishlist data for a user
  const getWishlistData= asyncHandler(async (req, res) => {
    const { userId } = req;

    try {
      // Find all wishlist items for the specific user
      const wishlistItems = await Wishlistmodel.find({ userId });

      res.status(200).json(wishlistItems);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  })

  // Add item to wishlist
  const addItemToWishlist= asyncHandler(async (req, res) => {
    const { userId } = req;
    const { productId } = req.params;

    try {
      // Check if the item is already in the wishlist for the specific user
      const existingWishlistItem = await Wishlistmodel.findOne({ userId, productId });

      if (existingWishlistItem) {
        res.status(400).json({ message: 'Item already in wishlist' });
      } else {
        // If the item is not in the wishlist, add a new wishlist item
        const newWishlistItem = await Wishlistmodel.create({ userId, productId });
        res.status(201).json(newWishlistItem);
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  })

  // Remove item from wishlist
  const removeItemFromWishlist= asyncHandler(async (req, res) => {
    const { userId } = req;
    const { productId } = req.params;

    try {
      // Find the wishlist item for the specific user and product
      const wishlistItem = await Wishlistmodel.findOne({ userId, productId });

      if (!wishlistItem) {
        return res.status(404).json({ message: 'Wishlist item not found' });
      }

      // Remove the item from the wishlist
      await wishlistItem.remove();
      res.status(200).json({ message: 'Wishlist item removed successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  })

module.exports = { getWishlistData, addItemToWishlist, removeItemFromWishlist };
