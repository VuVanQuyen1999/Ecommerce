const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        solid: {
            type: Number,
            default: 0,
        },
        images: [],
        color: [],
        tags: [],
        rattings: [
            {
                star: Number,
                comment: String,
                postedby: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
            },
        ],
        totalrating: {
            type: String,
            default: 0,
        },
    },
    { timestamps: true }
);

//Export the model
module.exports = mongoose.model("Product", productSchema);
