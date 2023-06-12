import {CartsModel, cartModel} from './models/cartModel.js';

import mongoose from 'mongoose';
import {updateProduct} from "./products.dao.js"

export default class CartsDaoMongoDB {
    async getCart() {
        try {
            const response = await CartsModel.findById()
            return response;
        } catch (error) {
            console.log(error);
        };
    };
    
    async createCart() {
        try {
        const response = await CartsModel.create({});
        return response;
        } catch (error) {
        console.log(error);
        };
    };
    
    async getCartById(id){
        try {
            const cart = await CartsModel.findById(id);
            return cart;            
        } catch (error) {
            console.log(error);
            
        }
    }

    async addProductToCart(prodId, cartId){
        try {
            const cartFind = await CartsModel.findById(cartId)
            const existingProduct = await cartFind.products.find(productIt => productIt._id === prodId);
            if(existingProduct){
                const updatedQuantity = existingProduct.quantity + 1
                await CartsModel.updateOne(
                    {_id: cartId, 'products._id': prodId},
                    {$set: {'products.$.quantity': updatedQuantity}}
                );
            } else{
                await CartsModel.findOneAndUpdate(
                    {_id: cartId},
                    {$push: {products: {_id: prodId, quantity: 1}}},
                );
            };
            const cartUpdate = await CartsModel.findById(cartId)
            return cartUpdate
        } catch (error) {
            console.log(error)
        };
    };

    async deleteProductToCart (id, productId){
        try {
            const cartFind = await CartsModel.findById(id);
            const productIndex = cart.carrito.findIndex(product => product._id == productId)
            cart.carrito.splice(productIndex, 1);
            return await cart.save();
        } catch (error) {
            console.log(error)
        };
    };
};

export const deleteCart = async (id) => {
    try {
        return await cartModel.findByIdAndDelete(id);
        } catch (error) {
        console.log(error);
    }
}

export const updateProductQuantify = async(cartId, productId, quantify)=>{
    try {
        const cart = await cartModel.findById(cartId);
        if(!cart){
            throw new Error("carrito no encontrado");
        }
        const productToUpdate = cart.carrito.find((product)=> product._id.toString()=== productId);
        if(!productToUpdate){
            throw new Error("El producto no esta en el carrito");
        }
        const updateProduct=await updateProduct(productId, {quantify});
        if(!updateProduct){
            throw new Error("error al contar los productos");
        }
        return cart;
    } catch (error) {
        console.log(error);
        throw error;
    }
};