import { Router } from "express";

import { createCatedratico } from "../../controllers/db_controllers/catedraticos";

const router = Router()

router.post('/', createCatedratico)

export default router;