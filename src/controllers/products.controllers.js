import {
        addProductService,
        deleteProductService,
        getProductByIdService,
        getProductsService,
        updateProductService
} 
        from "../services/products.services.js";

export const getProductsController = async (req, res, next) => {
    try {
        const { page, limit } = req.query;
        const products = await getProductsService(page, limit);
        let statusRes;
        products ? statusRes = 200 : statusRes = 404;
        res.json({
            statusRes,
            payload: products.docs,
            info: {
                totalPages: products.totalPages,
                prevPage: products.hasPrevPage ? products.prevPage : false,
                nextPage: products.hasNextPage ? products.nextPage : false,
                page: products.page,
                hasPrevPage: products.hasPrevPage,
                hasNextPage: products.hasNextPage,
                prevLink: products.hasPrevPage ? `http://localhost:8080/products?page=${products.prevPage}` : false,
                nextLink: products.hasNextPage ? `http://localhost:8080/products?page=${products.nextPage}` : false
            }
        });
    } catch (error) {
        next(error);
    }
}
export const getProductByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await getProductByIdService(id);
        if(product){
            res.status(200).json(product);
        } else{
            res.status(400).json({message: "producto no encontrado"});
        }
        res.json(doc);
        } catch (error) {
        next(error);
    }
}

export const addProductController = async(req, res, next)=>{
    try{
        const product = req.body;
        const newProduct = await addProductService(product);
        res.status(201).json({ message: 'Product added successfully', product: newProduct });
    } catch (error) {
        next(error);
    }
}

export const updateProductController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = req.body;
        const updateProduct = await updateProductService(id, product);
        if(updateProduct){
            res.status(200).json({message: "producto actualizado", product: updateProduct});
        } else{
            res.status(400).json({message: "producto no encontrado"});
        }
    } catch (error) {
        next(error);
    }
}

export const deleteProductController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedProduct=await deleteProductService(id);
        if (deletedProduct) {
            res.status(200).json({ message: 'producto borrado', product: deletedProduct });
        } else {
            res.status(404).json({ message: 'Product no encontrado' });
        }
    } catch (error) {
        next(error);
    }
}

/*
export const createController = async (req, res, next) => {
    try {
        const { name, description, price, stock } = req.body
        const newDoc = await createService({
            name,
            description,
            price,
            stock
        })
        res.json(newDoc);
        } catch (error) {
        next(error);
        }
    };

    export const getAllController = async (req, res, next) => {
        try {
            const docs = await getAllService();
            res.json(docs);
        } catch (error) {
            next(error);
        }
    }
*/