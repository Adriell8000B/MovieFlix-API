import { IMovie } from "./IMovie";

export interface IMovieRepository {
	RetrieveMovies(): Promise<IMovie[] | null>
}