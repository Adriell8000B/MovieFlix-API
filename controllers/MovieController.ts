import express from "express"
import { IMovieController } from "../interfaces/IMovieController";
import { IMovieRepository } from "../interfaces/IMovieRepository";
import { HandlePromise } from "../utils/HandlePromise";

export class MovieController implements IMovieController {
	private static _instance: MovieController | null = null
	private constructor (
		private readonly _movie_repository: IMovieRepository
	) {}

	public static GetInstance(_movie_repository: IMovieRepository) {
		if(!this._instance) {
			this._instance = new MovieController(_movie_repository)
		}

		return MovieController._instance!
	}

	public async GetMovies(_req: express.Request, res: express.Response) {
		const [response, error] = await HandlePromise(this._movie_repository.RetrieveMovies())

		if (error) {
			return res.status(500).json({ error: "Internal server error!" })
		}

		return res.status(200).json(response)
	}
}