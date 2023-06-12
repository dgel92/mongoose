import {
        addProductController,
        deleteProductController,
        getProductByIdController,
        getProductsController,
        updateProductController
} from "../controllers/products.controllers.js";

import { Router } from "express";

const router = Router();

router.get('/', getProductsController);
router.get('/:id', getProductByIdController);
router.post('/', addProductController);
router.put('/:id', updateProductController);
router.delete('/:id', deleteProductController);

export default router