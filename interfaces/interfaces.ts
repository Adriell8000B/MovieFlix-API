import { Movie } from "../generated/prisma"
import express from "express"

export interface IRouter {
	SetupRoutes(): void
}

export interface IMiddlewares {
	SetupMiddlewares(): void
}

export interface IDatabase {
	SetupDatabase(): Promise<void>
}

export interface IMovieModel {
	ReadMovies(): Promise<Movie[] | undefined>
}

export interface IMovieController {
	GetMovies(
		req: express.Request,
		res: express.Response
	): Promise<express.Response<any, Record<string, any>> | undefined>
}
