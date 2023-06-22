import { Router } from "express";

const router = Router()

import { createEstudiante, 
    deleteEstudiante, 
    getEstudiantess,
    updateEsutidante } from "../../controllers/db_controllers/estudiantes";



router.get('/', getEstudiantess)

router.post('/', createEstudiante )

router.delete('/:id', deleteEstudiante)

router.put('/:id', updateEsutidante)


export default router;