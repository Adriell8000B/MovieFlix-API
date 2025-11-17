import express, { Response } from "express"
import { Document } from "mongoose";
import { IMovieModel } from "./models";

export interface IMovieController {
	GetMovies(req: express.Request, res: express.Response):  Promise<Response<any, Record<string, any>>>
	GetMovie(req: express.Request, res: express.Response ,movieName: string): Promise<(Document<unknown, {}, IMovieModel, {}, {}> & IMovieModel & Required<{
		_id: unknown;
	}> & {
		__v: number;
	})[] | undefined>
}