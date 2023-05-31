import {
    createController,
    deleteController,
    getAllController,
    getByIdController,
    updateController
}
from "../controllers/products.controllers.js"

import {Router} from "express";

const router = Router();

router.get('/', getAllController);
router.get('/:id', getByIdController);
router.post('/', createController);
router.put('/:id', updateController);
router.delete('/:id', deleteController);

export default router