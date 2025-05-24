import express from "express"
import { IRouter, IMiddlewares, IDatabase } from "../interfaces/interfaces"

export class Server {
	private _express: express.Application
	private _port: number
	private _router: IRouter
	private _middlewares: IMiddlewares
	private _database: IDatabase

	constructor(
		express: express.Application,
		port: number,
		router: IRouter,
		middlewares: IMiddlewares,
		database: IDatabase
	) {
		this._express = express
		this._port = port
		this._router = router
		this._middlewares = middlewares
		this._database = database
	}

	private listen() {
		this._express.listen(this._port, () => {
			console.log("Look mom it's alive :)")
		})
	}

	private setup() {
		this._router.SetupRoutes()
		this._middlewares.SetupMiddlewares()
		this._database.SetupDatabase()
	}

	public Init() {
		this.setup()
		this.listen()
	}
}
