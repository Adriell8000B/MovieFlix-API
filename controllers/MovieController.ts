import { IMovieController, IMovieModel } from "../interfaces/interfaces"
import { Request, Response } from "express"

class MovieController implements IMovieController {
	private _movie_model: IMovieModel

	constructor(movie_model: IMovieModel) {
    this._movie_model = movie_model
  }

  public async GetMovies(_req: Request, res: Response): Promise<void> {
    try {
      const movies_data = await this._movie_model.ReadMovies()
      res.send(res.json(movies_data))
    } catch(error: unknown) {
      console.log("There was an error with the movies: ", error)
    }
  }
}

export { MovieController }