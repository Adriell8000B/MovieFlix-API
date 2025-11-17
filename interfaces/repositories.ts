import { Document } from "mongoose";
import { IMovieModel } from "./models";

export interface IMovieRepository {
	RetrieveMovies(): Promise<(Document<unknown, {}, IMovieModel, {}, {}> & IMovieModel & Required<{
		_id: unknown;
	}> & {
		__v: number;
	})[] | undefined>

	FindMovie(movieName: string): Promise<(Document<unknown, {}, IMovieModel, {}, {}> & IMovieModel & Required<{
		_id: unknown;
	}> & {
		__v: number;
	})[] | undefined>
}