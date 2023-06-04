import {
    createService,
    deleteService,
    getAllService,
    getByIdService,
    updateService
} from '../services/products.services.js';

export const getAllController = async (req, res, next) => {
    try {
        const docs = await getAllService();
        res.json(docs);
    } catch (error) {
        next(error);
    }
}

export const getByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const doc = await getByIdService(id);
        res.json(doc);
    } catch (error) {
    next(error);
    }
};
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

export const updateController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, description, price, stock } = req.body
        await getByIdService(id);
        const docUpdate = await updateService(
            id,
            { name, description, price, stock }
        )
        res.json(docUpdate);
    } catch (error) {
        next(error);
    }
}

export const deleteController = async (req, res, next) => {
    try {
        const { id } = req.params;
        await deleteService(id)
        res.send('product deleted!')
        
    } catch (error) {
        next(error);
    }
}