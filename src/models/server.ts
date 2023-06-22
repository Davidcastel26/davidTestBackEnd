import express, { Application } from 'express'
import cors from 'cors'

// DB ROUTES 
import gradoRouter from '../Routes/db_routes/grado.routes'
import carreraRouter from '../Routes/db_routes/carrera.routes'
import catedraticoRouter from '../Routes/db_routes/catedratico.routes'
import estudianteRouter from '../Routes/db_routes/estudiante.routes'
import cursoRouter from '../Routes/db_routes/curso.routes'

class Server {

    private app: Application
    private port: string
    private apiPahts = {
        estudiante:'/api/estudiante',
        catedriatico:'/api/catedriatico',
        curso:'/api/curso',
        grado:'/api/grado',
        carrera:'/api/carrera',
        jwt:'/api/jwt',
    }

    constructor(){
        this.app = express()
        this.port = process.env.PORT || '8000'

        this.middleware()
        this.routes()
    }

    middleware(){
        this.app.use(cors())
        this.app.use(express.json())
    }

    routes(){
        this.app.use(this.apiPahts.grado, gradoRouter)
        this.app.use(this.apiPahts.catedriatico, catedraticoRouter)
        this.app.use(this.apiPahts.carrera, carreraRouter)
        this.app.use(this.apiPahts.estudiante, estudianteRouter)
        this.app.use(this.apiPahts.curso, cursoRouter)
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server runing on port ${this.port}`);
        })
    }

}


export default Server;