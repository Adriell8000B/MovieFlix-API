import { PrismaClient } from "@prisma/client"
import { IDatabase } from "../interfaces/interfaces"

class Database implements IDatabase {
	private _prisma: PrismaClient

	constructor(prisma: PrismaClient) {
		this._prisma = prisma
	}

	public async SetupDatabase(): Promise <void> {
		try {
			const response = await this._prisma.$connect()
			console.log("Look mom, it works :)")
			return response
		} catch(error) {
			console.log(`Couldn't connect to database: ${error}`)
		}
	}
}

export { Database }