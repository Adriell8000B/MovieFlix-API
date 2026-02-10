import express from "express"
import { Response } from "express";

export interface IMovieController {
	GetMovies(req: express.Request, res: express.Response): Promise<Response>
}