import mongoose, { model } from "mongoose";

var listingSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    },
    image: {
        type: [],
        require: true
    },
    description: {
        type: String,
        require: true
    },
}, 
    {timestamps: true}
);

const listings = mongoose.model('listing', listingSchema);

export default listings