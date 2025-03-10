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
    }

    public setupMiddlewares() {
        if(Object.keys(this.corsOptions).length > 0) {
            this.express.use(cors(this.corsOptions))
        }

        if(this.middlewares.length > 0) {
            this.middlewares.forEach((middleware) => {
                this.express.use(middleware)
            })
        }
    }

    public getExpress() {
        return this.express
    }
}