import express from "express"
import { IMovieController } from "../interfaces/controllers"

class Router {
	private readonly _express: express.Application
	private readonly _movieController: IMovieController

	constructor(
		express: express.Application,
		movieController: IMovieController
	) {
		this._express = express
		this._movieController = movieController
	}

	public SetupRoutes() {
		this._express.get("/", (_req, res) => {
			return res.redirect("/api")
		})

		this._express.get("/api", (_req, res) => {
			return res.send("API Start")
		})

		this._express.get("/api/movies", (req, res) => {
			return this._movieController.GetMovies(req, res)
		})
	}
}

export default Router