import ProductsDaoMongoDB from "../daos/mongoDb/products.dao.js";

const prodDao = new ProductsDaoMongoDB();

export const getProductService = async (page, limit)=>{
    try {
        return await getProducts(page, limit)
    } catch (error) {
        
    }
}

export const getProductByIdService = async (id) => {
    try {
        return await getProductById()
    } catch (error) {
        console.log(error);
    }
};

export const addProductService = async (product) => {
    try {
        return await addProduct(product);
    } catch (error) {
        console.log(error);
    }
}

export const updateProductService  = async (id, product) => {
    try {
        return await updateProduct(id, product)
    } catch (error) {
    console.log(error);
    }
};

export const deleteProductService = async (id) => {
    try {
        return await deleteProduct(id)
    } catch (error) {
    console.log(error);
    }
};

/*
export const getAllService = async () => {
    try {
    const docs = await prodDao.getAllProducts();
        return docs;
    } catch (error) {
    console.log(error);
    }
};

    
    export const createService = async (obj) => {
        try {
        const newProd = await prodDao.createProduct(obj);
        if(!newProd) throw new Error('Validation Error!')
        else return newProd;
        } catch (error) {
        console.log(error);
        }
    };
*/