import express from "express"
import { IMiddlewares } from "../interfaces/interfaces"
import { IDatabase } from "../interfaces/interfaces"
import { IRouter } from "../interfaces/interfaces"

export class App {
    private _express: express.Application
    private _PORT: Number
    private _middlewares: IMiddlewares
    private _databaseController: IDatabase
    private _router: IRouter

    constructor(
        express: express.Application,
        PORT: number,
        middlewares: IMiddlewares,
        databaseController: IDatabase,
        router: IRouter
    ) {
        this._express = express
        this._PORT = PORT
        this._middlewares = middlewares
        this._databaseController = databaseController
        this._router = router
    }

    private listen() {
        this._express.listen(this._PORT, () => {
            console.log("Look mom, it's alive!! :)")
        })
    }
    
    public init() {
        this._middlewares.setupMiddlewares()
        this._router.setupRouting()
        this._databaseController.connectDatabase()
        this.listen()
    }
}
