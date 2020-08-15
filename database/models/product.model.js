const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String
}, {
    timestamps: true,
    toObject: {
        transform: function (doc, rel, options) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;

        }
    }
})

module.exports = mongoose.model('Product', productSchema);