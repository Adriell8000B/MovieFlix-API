import express from "express"
import { IMiddlewaresApplier } from "../interfaces/server-interfaces"

export class MiddlewareApplier implements IMiddlewaresApplier{
  private readonly _express: express.Application
  private readonly _middlewares: express.RequestHandler[]

  constructor(
    express: express.Application,
    middlewares: express.RequestHandler[]
  ) {
    this._express = express
    this._middlewares = middlewares
  }

  public SetupMiddlewares(): void {
    try {
      this._middlewares.forEach((middleware) => {
      this._express.use(middleware)
      })
    } catch(error: unknown) {
      console.log("SetupMiddlewares(): ", error)
    }
  }
}