import { Router } from "express";
import { check } from "express-validator";

// controllers section 
import { longin } from "../../controllers/JWTcontrollers/jwtestudiantes";


const router = Router()

// create JSON WEB TOKEN for a especif user 
router.post('/login', longin)


export default router;