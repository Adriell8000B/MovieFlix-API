import express from "express"
import { IMiddlewares } from "../interfaces/interfaces"

export class Middlewares implements IMiddlewares {
	private _express: express.Application
	private _middlewares: express.RequestHandler[]

	constructor(
		express: express.Application,
		middlewares: express.RequestHandler[]
	) {
		this._express = express
		this._middlewares = middlewares
	}

	SetupMiddlewares(): void {
		this._middlewares.forEach((middleware) => {
			this._express.use(middleware)
		})
	}
}
