import { movies, PrismaClient } from "../generated/prisma"
import { IMovieRepository } from "../interfaces/repositories-interface"

export class MovieRepository implements IMovieRepository {
  private readonly _prisma: PrismaClient

  constructor(prisma: PrismaClient) {
    this._prisma = prisma
  }

  public async ReadMovies(): Promise<movies[]> {
    try {
      const movies = await this._prisma.movies.findMany()
      return movies
    } catch(error) {
      throw new Error("failed to read movies from db")
    }
  }
}
