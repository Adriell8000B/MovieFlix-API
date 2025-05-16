import express from "express"
import { IMovieController, IRouter } from "../interfaces/interfaces"

export class Router implements IRouter {
	private _express: express.Application
	private _movie_controller: IMovieController

	constructor (
			express: express.Application,
			movie_controller: IMovieController
	) {
			this._express = express
			this._movie_controller = movie_controller
	}

	SetupRouting() {
		this._express.get("/", (req, res) => {
			this._movie_controller.GetMovies(req, res)
		})

		this._express.get("/keepalive", (_req, res) => {
				res.send("Look mom, i did it!!")
		})
	}
}
