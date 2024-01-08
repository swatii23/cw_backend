const { mongoose } = require('../imports/module.import');

const wishlistSchema = mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Wishlistmodel = mongoose.model('Wishlist', wishlistSchema);

module.exports = { Wishlistmodel };
