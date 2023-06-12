import { ProductsModel } from "../mongoDb/models/products.model.js";

export default class ProductsDaoMongoDB {

    async getProducts(page = 1, limit = 2){
        try {
            const response = await ProductsModel.paginate({}, { page, limit });
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async getProductById(id) {
        try {
            const response = await ProductsModel.findById(id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async addProduct(product) {
        try {
            return await ProductsModel.create(product);
        } catch (error) {
            console.log(error);
        }
    }

    async updateProduct(id, product) {
        try {
            await ProductsModel.findByIdAndUpdate({_id: id}, product,{new:true});
        } catch (error) {
            console.log(error);
        }
    }

    async deleteProduct(id) {
        try {
            const response = await ProductsModel.findByIdAndDelete(id);
            return response;
        } catch (error) {
        console.log(error);
        }
    }

    async getAllProducts() {
        try {
        const response = await ProductsModel.find({});
        return response;
        } catch (error) {
        console.log(error);
    }
    }

    
    async createProduct(obj) {
    try {
        const response = await ProductsModel.create(obj);
        return response;
        } catch (error) {
        console.log(error);
        }
    }
}