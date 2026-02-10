import express from "express"
import { IRouter } from "../interfaces/IRouter"
import { IMovieController } from "../interfaces/IMovieController"

export class Router implements IRouter {
	private static _instance: Router | null = null

	constructor (
		private readonly _express: express.Application,
		private readonly _movie_controller: IMovieController
	) {}

	public static GetInstance(
		_express: express.Application,
		_movie_controller: IMovieController
	) {
		if(!this._instance) {
			this._instance = new Router(_express, _movie_controller)
		}

		return Router._instance!
	}

	public SetupRoutes() {
		this._express.get("/api/movies", (req, res) => {
			this._movie_controller.GetMovies(req, res)
		})
	}
}