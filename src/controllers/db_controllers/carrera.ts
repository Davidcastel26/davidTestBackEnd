import { Request, Response, NextFunction } from "express";
import { PrismaClient} from '@prisma/client'
import { v4 as uuidv4 } from 'uuid';

const { carrera } = new PrismaClient()

export const getCarreras = async (req: Request, res: Response, next: NextFunction )=>{
    
    try {
        
        const getAll = await carrera.findMany()

        res.status(200).json(getAll)

    } catch (error) {
        next(error)
    }

}

export const createCarrera = async (req: Request, res: Response, next: NextFunction )=>{
    
    const { nombreCarrera } = req.body;

    try {

        const id = uuidv4()

        const postCarrera = await carrera.create({
            data:{
                idCarrera: id,
                nombreCarrera: nombreCarrera
            }
        })

        res.status(200).json({
            msg:'created',
            postCarrera
        })
        
    } catch (error) {
        next(error);
        console.log(res.status(400).json({msg:'could not created carrera'}));
        
    }

}