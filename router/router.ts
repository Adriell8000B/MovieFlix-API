import express from "express"
import { IMovieController } from "../interfaces/controllers-interface"

export class Router {
  private readonly _express: express.Application
  private readonly _movie_controller: IMovieController

  constructor(
    express: express.Application,
    movie_controller: IMovieController
  ) {
    this._express = express
    this._movie_controller = movie_controller
  }

  public SetupRoutes(): void {
    this._express.get("/", (req, res) => {
      this._movie_controller.GetMovies(req, res)
    })

    this._express.get("/hi_mom", (_req, res) => {
      res.json("Hi mom!")
    })
  }
}