import { RequestHandler } from "express"

export interface IRouter {
	SetupRoutes(): void
}

export interface IDatabase {
	SetupDatabase(): void
}

export interface IMiddlewares {
	AddMiddlewares(middlewares: RequestHandler[]): void
	SetupMiddlewares(): void
}