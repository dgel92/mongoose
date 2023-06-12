import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    carrito: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "productDos",
            default: []
        }
    ]
});

cartSchema.pre("find", function(next) {
    this.populate("carrito");
    next();
});

export const cartModel = mongoose.model("cart2", cartSchema);