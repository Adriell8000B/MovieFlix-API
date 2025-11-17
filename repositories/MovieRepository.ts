import { Document, Model } from "mongoose";
import { IMovieModel } from "../interfaces/models";
import { IMovieRepository } from "../interfaces/repositories";

class MovieRepository implements IMovieRepository {
	private readonly _movieModel: Model<IMovieModel>

	constructor(movieModel: Model<IMovieModel>) {
		this._movieModel = movieModel
	}

	public async RetrieveMovies() {
		let response

		try {
			response = await this._movieModel.find()
		} catch(error) {
			console.log("Error retrieving movies: ", error)
		}

		return response
	}

	public async FindMovie(movieName: string) {
		let response

		try {
			const searchString = movieName;

			response = await this._movieModel.find({
				movie_name: { $regex: searchString, $options: 'i' }
			});
		} catch (error: unknown) {
			console.log("Error retrieving movies: ", error)
		}

		return response
	}
}

export default MovieRepository