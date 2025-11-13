import { Document } from "mongoose"

export interface IMovieModel extends Document{
	movie_banner: String
	movie_rating: String
	movie_name: String
	movie_year: Number
	movie_genre: String
}