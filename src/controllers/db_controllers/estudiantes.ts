import { Request,request, Response, NextFunction } from "express";
import { PrismaClient} from '@prisma/client'
import { v4 as uuidv4 } from 'uuid';
const { estudiante } = new PrismaClient()

export const getEstudiantess = async(req: Request, res: Response, next: NextFunction) =>{

    try {
        
        const allestudiantes = await estudiante.findMany({
            include:{
                curso:true,
            }
        })

        return res.status(200).json({
            msg:'runing',
            allestudiantes
        })

    } catch (error) {
        next(error)
        console.log(error)
    }

}


export const updateEsutidante = async (req: typeof request, res: Response, next: NextFunction )=>{


    const { id } = req.params
    const {appellido, nombre, ...userData } = req.body;

    // const usertoken = req.user

    const updateData = {
        appellido,
        nombre,
        userData
    }

    await estudiante.update({
        where:{
            idEstudiante:id
        },
        data:{
            appellido:appellido,
            nombre: nombre,
            ...userData
        }
    })

    // if( usertoken.id !== id ){
    //     return res.status(401).json({msg:'incorrect token - login first to update user'})
    // }

    return res.status(200).json({
        msg:'PUT done user updated',
        updateData
    })


}
    


export const createEstudiante = async (req: Request, res: Response, next: NextFunction )=>{
    
    const { nombre,appellido, Nivel,Seccion, cursoId} = req.body;

    const id:string = uuidv4()
    try{

    const createEstudiantes = {
        idEstudiante: id,
        nombre,
        appellido,
        Nivel,
        Seccion,
        cursoId
    }
    

    await estudiante.create({
        data: createEstudiantes
    })
    
    res.status(201).json({ 
        msg:'User created',
        createEstudiantes
    })

    }catch(err){
        next(err)
    }

}

export const deleteEstudiante = async (req: Request, res: Response, next: NextFunction )=>{

    const { id } = req.params

    const estudianteDelete = await estudiante.delete({
        where:{
            idEstudiante: id
        }
    })

    return res.json(estudianteDelete)

}
