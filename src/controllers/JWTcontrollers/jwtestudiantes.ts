import { Request, Response, NextFunction } from "express";
import { PrismaClient} from '@prisma/client'

// helpers
import { generateJWT } from '../../helpers/jwtCreate';

const {estudiante} = new PrismaClient()

export const longin = async (req: Request, res: Response, next: NextFunction )=>{
    
    const {nombre, appellido} = req.body;
    
    try {

        // verigy if mail exist 
        const userdb = await estudiante.findFirst({
            where:{
                nombre: nombre,
                appellido:appellido
            }
        })

        if(!userdb){
            return res.status(400).json({
                msg:'nomber / apellido no son correctos'
            })
        }

       
        // using the helpers 
        const token = await generateJWT( userdb.idEstudiante )

        res.status(201).json({
            userdb,
            token
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg:'Go with admin'
        })
        
    }

}