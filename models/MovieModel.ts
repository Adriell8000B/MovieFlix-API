import mongoose, { model } from "mongoose";
import { IMovie } from "../interfaces/IMovie";

const MovieSchema = new mongoose.Schema({
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
	},
	movie_link: {
		type: String,
		required: true
	},
})

export default model<IMovie>("MovieModel", MovieSchema, "movies")