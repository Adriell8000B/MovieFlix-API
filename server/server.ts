import express from "express"
import { IDatabase, IMiddlewares, IRouter } from "../interfaces/general"

class Server {
	private readonly _express: express.Application
	private readonly _router: IRouter
	private readonly _database: IDatabase
	private readonly _middlewares: IMiddlewares
	private readonly _port: Number

	constructor(
		express: express.Application,
		router: IRouter,
		database: IDatabase,
		middlewares: IMiddlewares,
		port: Number
	) {
		this._express = express
		this._router = router
		this._database = database
		this._middlewares = middlewares
		this._port = port
	}

	private listen(): void {
		this._express.listen(this._port, () => {
			console.log("http://localhost:" + this._port)
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

export default Server