import express from "express"
import cors, { CorsOptions } from "cors"

export class Middlewares {
    private express: express.Application
    private middlewares: express.RequestHandler[]
    private corsOptions: cors.CorsOptions

    constructor(express: express.Application, middlewares: express.RequestHandler[] = [], options?: CorsOptions) {
        this.express = express
        this.middlewares = middlewares
        this.corsOptions = options || {}
        this.setupMiddlewares()
    }

    private setupMiddlewares() {
        if(Object.keys(this.corsOptions).length > 0) {
            this.express.use(cors(this.corsOptions))
        }

        this.middlewares.forEach((middleware) => { this.express.use(middleware) })
        this.express.use(express.json())
        this.express.use(express.urlencoded({extended: true}))
    }

    public getExpress() {
        return this.express
    }

    public addMiddleware(middleware: express.RequestHandler) {
        this.middlewares.push(middleware)
        this.express.use(middleware)
    }
}