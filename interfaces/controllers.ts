import express, { Response } from "express"

export interface IMovieController {
	GetMovies(req: express.Request, res: express.Response):  Promise<Response<any, Record<string, any>>>
}