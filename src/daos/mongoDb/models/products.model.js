import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const productsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    quantify: { type: Number, default: 1, required: true }
});

productsSchema.plugin(mongoosePaginate);

export const ProductModel = mongoose.model("productDos", productsSchema);