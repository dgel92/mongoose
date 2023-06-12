import {
        addProductToCartController,
        createCartController,
        deleteCartController,
        deleteProductFromCartController,
        getCartByIdController,
        getCartController,
        updateProductQuantityController
} from "../controllers/cartControllers.js";

import { Router } from 'express';

const router = Router();

router.get('/', getCartController);
router.post('/', createCartController);
router.get('/:id', getCartByIdController);
router.post('/:id/:idprod', addProductToCartController);
router.delete('/:id', deleteCartController);
router.delete('/:id/products/:productId', deleteProductFromCartController);
router.put('/:cid/products/:pid', updateProductQuantityController);

export default router;