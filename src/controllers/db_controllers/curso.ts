import { Request, Response, NextFunction } from "express";
import { PrismaClient} from '@prisma/client'

const {curso } = new PrismaClient()

export const getAllCursos =async (req:Request, res:Response, next:NextFunction) => {
    try {
        
        const allCursos = await curso.findMany({
            include:{
                carrera:true,
                grado:true,
                catedratico:true
            }
        })

        return res.status(200).json({
            msg:'runing',
            allCursos
        })

    } catch (error) {
        next(error)
        console.log(error)
    }
}

export const createCurso = async (req: Request, res: Response, next: NextFunction )=>{
    
    const {} = req.body;

}