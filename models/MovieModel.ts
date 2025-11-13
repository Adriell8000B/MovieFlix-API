import { model, Schema } from "mongoose";
import { IMovieModel } from "../interfaces/models";

const movie_schema = new Schema({
	movie_banner: {
		type: String,
		required: true
	},
	movie_rating: {
		type: String,
		required: true
	},
	movie_name: {
		type: String,
		required: true
	},
	movie_year: {
		type: Number,
		required: true
	},
	movie_genre: {
		type: String,
		required: true
	}
})

export default model<IMovieModel>("movies", movie_schema)