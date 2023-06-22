import { Router } from "express";

// controllers
import { createCurso } from "../../controllers/db_controllers/curso";

const router = Router()

router.post('/', createCurso)

export default router;