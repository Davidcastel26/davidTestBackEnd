import { Router } from "express";

const router = Router()

import { createCurso, getAllCursos } from "../../controllers/db_controllers/curso";

router.get('/',getAllCursos)

router.post('/', createCurso)

export default router;