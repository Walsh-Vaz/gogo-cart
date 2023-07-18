const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    description: {
        type: String,
    },

    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },

    quantity: {
        type: Number,
    },
    
    price: { type: Number, required: true },
    productImage: { type: String }
});

module.exports = mongoose.model('Product', productSchema);