import express from "express"
import { IRouter } from "../interfaces/IRouter"
import { IDatabaseService } from "../interfaces/IDatabaseService"
import { IMiddlewaresManager } from "../interfaces/IMiddlewaresManager"

export class Server {
	private static _instance: Server | null = null

	constructor(
		private readonly _port: number,
		private readonly _express: express.Application,
		private readonly _router: IRouter,
		private readonly _middlewares_manager: IMiddlewaresManager,
		private readonly _database_service: IDatabaseService
	) { }

	public static GetInstance(
		_port: number,
		_express: express.Application,
		_router: IRouter,
		_middlewares_manager: IMiddlewaresManager,
		_database_service: IDatabaseService
	) {
		if (!this._instance) {
			this._instance = new Server(
				_port,
				_express,
				_router,
				_middlewares_manager,
				_database_service
			)
		}

		return Server._instance!
	}

	private setup(): void {
		this._database_service.SetupDatabaseService()
		this._middlewares_manager.SetupMiddlewares()
		this._router.SetupRoutes()
	}

	private listen(): void {
		try {
			this._express.listen(this._port)
		} catch (error) {
			throw new Error(`Couldn't start server: ${error}`)
		}
	}

	public Init(): void {
		this.setup()
		this.listen()
	}
}