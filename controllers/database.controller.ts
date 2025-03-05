import { json } from "express"
import { IDatabase } from "../interfaces/interfaces"

export class CDatabase implements IDatabase {
    private database: IDatabase

    constructor(database: IDatabase) {
        this.database = database
    }

    async connectDatabase() {
        try {
            const response = await this.database.connectDatabase()
            console.log("Look mom, it works :)")
            return response
        } catch(error) { console.log(`Couldn't connect to database: ${error}`) }
    }

    async getMovies() {
        try {
            const response = await this.database.getMovies()
            return response
        } catch(error) { console.log(`Couldn't get movies: ${error}`) }
    }
}