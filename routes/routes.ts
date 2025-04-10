import express from "express"
import { IRouter } from "../interfaces/interfaces"
import { IDatabase } from "../interfaces/interfaces"

export class Router implements IRouter {
    private _express: express.Application
    private _databaseController: IDatabase

    constructor (
        express: express.Application,
        databaseController: IDatabase
    ) {
        this._express = express
        this._databaseController = databaseController
    }

    setupRouting() {
        this._express.get("/", async (_req, res) => {
            try {
                const movies = await this._databaseController.getMovies()
                if (movies != null) {
                    res.json(movies)
                } else {
                    res.send("meu ovo")
                }
            } catch (error) {
                res.status(500).send(`Error fetching movies: ${error}`)
            }
        })

        this._express.get("/keepalive", (_req, res) => {
            res.send("Look mom,  i did it!!")
        })
    }
}
