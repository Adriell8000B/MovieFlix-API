import express from "express"
import { IRouter, IMiddlewaresApplier } from "../interfaces/server-interfaces"
import { IDatabase } from "../interfaces/database-interface"

export class Server {
	private readonly _express: express.Application
	private readonly _port: number
	private readonly _database: IDatabase
  private readonly _router: IRouter
	private readonly _middlewares_applier: IMiddlewaresApplier

	constructor(
		express: express.Application,
		port: number,
		database: IDatabase,
		router: IRouter,
		middlewares_applier: IMiddlewaresApplier
	) {
		this._express = express
		this._port = port
		this._database = database
    this._router = router
		this._middlewares_applier = middlewares_applier
	}

	private listen(): void {
		this._express.listen(this._port, () => {
			console.log("Look mom, it's alive :)")
		})
	}

	private setup(): void {
		this._middlewares_applier.SetupMiddlewares()
		this._database.SetupDatabase()
		this._router.SetupRoutes()
	}

	public Init(): void {
		this.setup()
		this.listen()
	}
}
