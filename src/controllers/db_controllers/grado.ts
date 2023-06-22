import { Request, Response, NextFunction } from "express";
import { PrismaClient} from '@prisma/client'
import { v4 as uuidv4 } from 'uuid';

const {grado} = new PrismaClient()

export const Create = async (req: Request, res: Response, next: NextFunction )=>{
    
    const { nombreGrado } = req.body;

    try {

        const id = uuidv4()

        const postGrado = await grado.create({
            data:{
                idGrado: id,
                nombreGrado: nombreGrado
            }
        })

        res.status(200).json({
            msg:'created',
            postGrado
        })
        
    } catch (error) {
        next(error);
        console.log(res.status(400).json({msg:'could not created carrera'}));
        
    }

}