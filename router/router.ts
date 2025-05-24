import express from "express"
import { IRouter, IMovieController } from "../interfaces/interfaces"

export class Router implements IRouter {
	private _express: express.Application
	private _movie_controller: IMovieController

	constructor(
		express: express.Application,
		movie_controller: IMovieController
	) {
		this._express = express
		this._movie_controller = movie_controller
	}

	public SetupRoutes(): void {
		this._express.get("/", (req, res) => {
			this._movie_controller.GetMovies(req, res)
		})
	}
}
