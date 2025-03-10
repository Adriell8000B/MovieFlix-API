import express from "express"
import helmet from "helmet"
import { Middlewares } from "../models/middlewares.service"
import { CDatabase } from "../controllers/database.controller"
import { MDatabase } from "../models/database.service"
import { Router } from "../routes/routes"

export class App {
    private express: express.Application
    private port: Number
    private middlewares: Middlewares
    private databaseController: CDatabase
    private routing: Router

    constructor() {
        const database = new MDatabase()
        this.express = express()
        this.port = 8080
        this.middlewares = new Middlewares(this.express, [helmet(), express.json(), express.urlencoded()],
        { origin: "https://movie-flix-dusky.vercel.app",
            methods: ["GET"],
            allowedHeaders: ""
        })
        this.databaseController = new CDatabase(database)
        this.routing = new Router(this.express, this.databaseController)
        this.init()
        this.listen()
    }
    
    private init() {
        this.middlewares.setupMiddlewares()
        this.routing.setupRouting()
        this.databaseController.connectDatabase()
    }

    private listen() {
        this.express.listen(this.port, () => {
            console.log("Look mom, it's alive!! :)")
        })
    }
}
