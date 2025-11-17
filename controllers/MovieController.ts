import { Document } from "mongoose"
import { IMovieRepository } from "../interfaces/repositories"
import { IMovieController } from "../interfaces/controllers"
import { Request, Response } from "express"
import { IMovieModel } from "../interfaces/models"
import { ParamsDictionary } from "express-serve-static-core"
import { ParsedQs } from "qs"
import MovieModel from "../models/MovieModel"

class MovieController implements IMovieController {
	private readonly _movieRepository: IMovieRepository

	constructor(movieRepository: IMovieRepository) {
		this._movieRepository = movieRepository
	}

	public async GetMovies(_req: Request, res: Response): Promise<Response<any, Record<string, any>>> {
		let response: (Document<unknown, {}, IMovieModel, {}, {}> & IMovieModel & Required<{ _id: unknown; }> & { __v: number; })[] | undefined

		try {
			response = await this._movieRepository.RetrieveMovies()
		} catch (error) {
			res.send({ message: `Error getting movies: ${error}` })
		}

		return res.json(response)
	}
	public async GetMovie(_req: Request, res: Response, movieName: string) {
		let response

		try {
			response = this._movieRepository.FindMovie(movieName)
		} catch(error) {
			res.send({ message: `Error getting movies: ${error}` })
		}

		return response
	}
}

export default MovieController