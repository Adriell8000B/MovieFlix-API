import { Movie, PrismaClient } from "../generated/prisma"
import { IMovieModel } from "../interfaces/interfaces"

export class MovieModel implements IMovieModel {
	private _prisma: PrismaClient

	constructor(prisma: PrismaClient) {
		this._prisma = prisma
	}

	public async ReadMovies(): Promise<Movie[] | undefined> {
		try {
			return await this._prisma.movie.findMany()
		} catch (error: unknown) {
			console.log("ReadMovies: ", error)
			return undefined
		}
	}
}
