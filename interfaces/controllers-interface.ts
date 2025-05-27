import express from "express"

export interface IMovieController {
  GetMovies(req: express.Request, res: express.Response): Promise<void>
}