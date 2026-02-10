import express from "express"
import { IMiddlewaresManager } from "../interfaces/IMiddlewaresManager"

export class MiddlewaresManager implements IMiddlewaresManager {
	private static _instance: MiddlewaresManager | null = null

	constructor(
		private readonly _express: express.Application,
		private readonly _middlewares: express.RequestHandler[]
	) { }

	public static GetInstance(_express: express.Application, _middlewares: express.RequestHandler[]) {
		if(!this._instance) {
			this._instance = new MiddlewaresManager(_express, _middlewares)
		}

		return MiddlewaresManager._instance!
	}

	public SetupMiddlewares(): void {
		if(this._middlewares.length === 0) {
			console.warn("No middlewares provided!")
			return
		}

		try {
			this._middlewares.forEach((middleware) => {
				this._express.use(middleware)
			})
		} catch(error) {
			throw new Error(`Couldn't setup middlewares: ${error}`)
		}
	}
}