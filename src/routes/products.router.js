import {Router} from "express";
import {
    getAllController,
    getProductByIdController,
    getProductByIdController,
    createProductController,
    updateProductController,
    deleteProductController
} from '../src/controllers/products.controllers';


const router = Router();

router.get('/', getAllController);
router.get('/:id', getProductByIdController);
router.post('/', createProductController);
router.put('/', updateProductController);
router.delete('/:id', deleteProductController)

export default router