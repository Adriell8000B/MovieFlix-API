import express from "express"
import { IRouter } from "../interfaces/interfaces"
import { CDatabase } from "../controllers/database.controller"

export class Router implements IRouter {
    private express: express.Application
    private databaseController: CDatabase

    constructor (express: express.Application, databaseController: CDatabase) {
        this.express = express
        this.databaseController = databaseController
    }

    setupRouting() {
        this.express.get("/")

        this.express.get("/movies", async (_req, res) => {
            try {
                const movies = await this.databaseController.getMovies()
                if (movies != null) {
                    res.json(movies)
                } else {
                    res.send("meu ovo")
                }
            } catch (error) {
                res.status(500).send(`Error fetching movies: ${error}`)
            }
        })
    }
}