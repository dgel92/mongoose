import {
    createProductController,
    deleteProductController,
    getAllController,
    getProductByIdController,
    updateProductController
} from '../controllers/products.controllers.js';

import { Router } from "express";

const router = Router();

router.get('/', getAllController);
router.get('/:id', getProductByIdController);
router.post('/', createProductController);
router.put('/:id', updateProductController);
router.delete('/:id', deleteProductController);

export default router