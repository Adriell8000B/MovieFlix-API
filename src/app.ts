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
        this.middlewares = new Middlewares(this.express, [], { origin: "https://movie-flix-dusky.vercel.app" })
        this.databaseController = new CDatabase(database)
        this.routing = new Router(this.express, this.databaseController)
        this.init()
        this.listen()
    }
    
    private init() {
        this.databaseController.connectDatabase()
        this.routing.setupRouting()
        this.middlewares.addMiddlewares([helmet(), express.json(), express.urlencoded()])
        this.middlewares.setupMiddlewares()
    }

    private listen() {
        this.express.listen(this.port, () => {
            console.log("Look mom, it's alive!! :)")
        })
    }
}
