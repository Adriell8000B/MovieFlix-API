import { Document } from "mongoose"
import { IMovieRepository } from "../interfaces/repositories"
import { IMovieController } from "../interfaces/controllers"
import { Request, Response } from "express"
import { IMovieModel } from "../interfaces/models"

class MovieController implements IMovieController {
	private readonly _movieRepository: IMovieRepository

	constructor(movieRepository: IMovieRepository) {
		this._movieRepository = movieRepository
	}

	public async GetMovies(_req: Request, res: Response): Promise<Response<any, Record<string, any>>> {
		let response: (Document<unknown, {}, IMovieModel, {}, {}> & IMovieModel & Required<{_id: unknown;}> & {__v: number;})[] | undefined

		try {
			response = await this._movieRepository.RetrieveMovies()
		} catch (error) {
			res.send({ message: `Error getting movies: ${error}` })
		}

		return res.json(response)
	}
}

export default MovieController