import express, { RequestHandler } from "express"

class Middlewares {
	private readonly _express: express.Application
	private readonly _middlewaresArray: RequestHandler[]

	constructor(
		express: express.Application,
		middlewaresArray: RequestHandler[]
	) {
		this._express = express
		this._middlewaresArray = middlewaresArray
	}

	public AddMiddlewares(middlewares: RequestHandler[]): void {
		middlewares.forEach((m) => {
			this._middlewaresArray.push(m)
		})
	}

	public SetupMiddlewares(): void {
		this._middlewaresArray.forEach((m) => {
			this._express.use(m)
		})
	}
}

export default Middlewares