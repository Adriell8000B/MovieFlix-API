import { Model } from "mongoose"
import { IMovieRepository } from "../interfaces/IMovieRepository"
import { IMovie } from "../interfaces/IMovie"
import { HandlePromise } from "../utils/HandlePromise"

export class MovieRepository implements IMovieRepository {
	private static _instance: MovieRepository | null

	private constructor (
		private readonly _movie_model: Model<IMovie>
	) {}

	public static GetInstance(_movie_model: Model<IMovie>) {
		if(!this._instance) {
			this._instance = new MovieRepository(_movie_model)
		}

		return MovieRepository._instance!
	}

	public async RetrieveMovies(): Promise<IMovie[] | null> {
		const [response, error] = await HandlePromise(this._movie_model.find({}).lean())

		if (error) {
			throw new Error(`Couldn't get movies: ${error}`)
		}

		return response
	}
}