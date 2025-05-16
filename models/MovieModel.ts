import { PrismaClient } from "@prisma/client"
import { IMovieModel } from "../interfaces/interfaces"
import { Movie } from "../types/types"

class MovieModel implements IMovieModel {
  private _prisma: PrismaClient

  constructor(prisma: PrismaClient) {
    this._prisma = prisma
  }

  async ReadMovies(): Promise<Movie[]> {
    return await this._prisma.movies.findMany()
  }
}

export { MovieModel }