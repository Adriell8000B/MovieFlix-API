import { IDatabase } from "../interfaces/interfaces"

export class DatabaseController implements IDatabase {
    private _databaseModel: IDatabase

    constructor(databaseModel: IDatabase) { this._databaseModel = databaseModel }

    async connectDatabase() {
        try {
            const response = await this._databaseModel.connectDatabase()
            console.log("Look mom, it works :)")
            return response
        } catch(error) { console.log(`Couldn't connect to database: ${error}`) }
    }

    async getMovies() {
        try {
            const response = await this._databaseModel.getMovies()
            return response
        } catch(error) { console.log(`Couldn't get movies: ${error}`) }
    }
}