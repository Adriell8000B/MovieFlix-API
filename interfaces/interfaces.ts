import { Request, Response } from "express"
import { Movie } from "../types/types"

export interface IMiddlewares {
	SetupMiddlewares(): void
}

export interface IRouter {
	SetupRouting(): void
}

export interface IDatabase {
	SetupDatabase(): Promise<any>
}

export interface IMovieModel {
	ReadMovies(): Promise<Movie[]>
}

export interface IMovieController {
	GetMovies(req: Request, res: Response): Promise<void>
}