import express from "express"
import { IMiddlewares } from "../interfaces/interfaces"
import { IDatabase } from "../interfaces/interfaces"
import { IRouter } from "../interfaces/interfaces"

class Server {
    private _express: express.Application
    private _PORT: Number
    private _middlewares: IMiddlewares
    private _database: IDatabase
    private _router: IRouter

    constructor(
        express: express.Application,
        PORT: number,
        middlewares: IMiddlewares,
        database: IDatabase,
        router: IRouter
    ) {
        this._express = express
        this._PORT = PORT
        this._middlewares = middlewares
        this._database = database
        this._router = router
    }

    private SetupServer() {
        this._express.listen(this._PORT, () => {
            console.log("Look mom, it's alive!! :)")
        })
    }
    
    public Init() {
        this._middlewares.SetupMiddlewares()
        this._router.SetupRouting()
        this._database.SetupDatabase()
        this.SetupServer()
    }
}

export { Server }