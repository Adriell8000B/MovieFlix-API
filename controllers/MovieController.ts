import express from "express"
import { IMovieRepository } from "../interfaces/repositories-interface"
import { IMovieController } from "../interfaces/controllers-interface"

export class MovieController implements IMovieController {
  private readonly _movie_repository: IMovieRepository

  constructor(movie_repository: IMovieRepository) {
    this._movie_repository = movie_repository
  }

  public async GetMovies(
    _req: express.Request,
    res: express.Response
  ): Promise<void> {
    try {
      const movies = await this._movie_repository.ReadMovies()
      res.status(200)
      res.json(movies)
    } catch(error: unknown) {
      res.json("An error ocurred fetching movies")
      console.log("MovieController: ", error)
    }
  }
}