import * as controller from "../controllers/users.controllers.js";

import {Router} from "express";

const router = Router();
router.get('/all', controller.getAllCtr)

router.post('/file', controller.createFileCtr);

router.get('/', controller.getByNameCtr);

router.get('/:id', controller.getByIdCtr);

router.get('/email/:email', controller.getByEmailCtr);

router.get("/aggregation1", controller.aggregation1);

router.put("/updateDocs", controller.updateManyUsers)
export default router;