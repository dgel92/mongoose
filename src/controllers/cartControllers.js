import CartsDaoMongoDB from "../daos/mongoDb/cartsDao.js";
import ProductsDaoMongoDB from "../daos/mongoDb/products.dao.js";

const cartDao = new CartsDaoMongoDB();
const prodDao = new ProductsDaoMongoDB();

export const getCartController = async(req,res,next)=>{
    try {
        const {id} = req.params;
        const cart = await cartDao.getCart(id);
        res.json(cart); 
    } catch (error) {
        next(error)
    }
}