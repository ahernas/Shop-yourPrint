const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  count: { type: Number, required: true },
  productId: { type: Number, required: true, ref: 'products' },

});

module.exports = mongoose.model('cartItems', cartItemSchema, 'cartItems');
