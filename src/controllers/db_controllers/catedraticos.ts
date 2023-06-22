import { Request, Response, NextFunction } from "express";
import { PrismaClient} from '@prisma/client'
import { v4 as uuidv4 } from 'uuid';

const { catedratico } = new PrismaClient()

export const createCatedratico = async (req: Request, res: Response, next: NextFunction )=>{
    
    const { nombreCatedratico } = req.body;

    try {

        const id = uuidv4()

        const postCarrera = await catedratico.create({
            data:{
                idCatedratico: id,
                nombreCatedratico: nombreCatedratico
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