import { Router } from "express";

import { createCarrera, 
         getCarreras } from "../../controllers/db_controllers/carrera";

const router = Router()

router.get('/', getCarreras)

router.post('/',createCarrera )

export default router;