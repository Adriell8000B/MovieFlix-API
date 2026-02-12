import { Document } from "mongoose"

export interface IMovie extends Document {
	id?: string
	movie_banner: string
	movie_rating: string
	movie_name: string
	movie_year: number
	movie_genre: string
	movie_link: string
}