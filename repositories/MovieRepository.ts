
import { IMovieRepository } from "../interfaces/IMovieRepository"
import { IMovie } from "../entities/IMovie"
import { HandlePromise } from "../utils/HandlePromise"
import { SupabaseClient } from "@supabase/supabase-js"

export class MovieRepository implements IMovieRepository {
	private static _instance: MovieRepository | null

	private constructor (
		private readonly _supabase: SupabaseClient
	) {}

	public static GetInstance(_supabase: SupabaseClient) {
		if(!this._instance) {
			this._instance = new MovieRepository(_supabase)
		}

		return MovieRepository._instance!
	}

	public async RetrieveMovies(): Promise<IMovie[] | null> {
		const [response, error] = await HandlePromise(
			this._supabase.from("movies").select("*")
		)

		if (error) {
			throw new Error(`Couldn't get movies: ${error}`)
		}

		return response?.data as IMovie[]
	}
}