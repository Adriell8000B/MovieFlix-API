export interface IMiddlewares {
    setupMiddlewares(): void
}

export interface IDatabase {
    connectDatabase(): Promise<any>
    getMovies(): Promise<any>
}

export interface IRouter {
    setupRouting(): void
}