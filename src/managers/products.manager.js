import { ProductModel } from "../models/products.model.js";

export default class ProductsManager{
    async getAllProducts() {
            try {
            const response = await ProductModel.find({});
            return response;
            } catch (error) {
            console.log(error);
            }
        }
        
        async getProductById(id) {
            try {
            const response = await ProductModel.findById(id);
            return response;
            } catch (error) {
            console.log(error);
            }
        }
        
        async createProduct(obj) {
            try {
            const response = await ProductModel.create(obj);
            return response;
            } catch (error) {
            console.log(error);
            }
        }
        
        async updateProduct(id, obj) {
            try {
            await ProductModel.updateOne({_id: id}, obj);
            return obj;
            } catch (error) {
            console.log(error);
            }
        }
        
        async deleteProduct(id) {
            try {
            const response = await ProductModel.findByIdAndDelete(id);
            return response;
            } catch (error) {
            console.log(error);
            }
        }
}