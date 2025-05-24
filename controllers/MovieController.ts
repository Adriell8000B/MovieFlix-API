import express from "express"
import { IMovieController, IMovieModel } from "../interfaces/interfaces"

export class MovieController implements IMovieController {
	private _movie_model: IMovieModel

	constructor(movie_model: IMovieModel) {
		this._movie_model = movie_model
	}

	async GetMovies(
		_req: express.Request,
		res: express.Response
	): Promise<express.Response<any, Record<string, any>> | undefined> {
		try {
			return res.json(await this._movie_model.ReadMovies())
		} catch (error: unknown) {
			console.log("GetMovies: ", error)
			return
		}
	}
}
