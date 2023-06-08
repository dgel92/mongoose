import * as controller from "../controllers/users.controllers.js";

import {Router} from "express";

const router = Router();
router.get('/all', controller.getAllCtr)

router.post('/file', controller.createFileCtr);

router.get('/', controller.getByNameCtr);

router.get('/:id', controller.getByIdCtr);

router.get('/email/:email', controller.getByemailCtr);

router.get("/aggregation1", controller.aggregation1);
export default router;