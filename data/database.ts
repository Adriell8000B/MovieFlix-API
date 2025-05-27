import { PrismaClient } from "../generated/prisma"
import { IDatabase } from "../interfaces/database-interface"

export class Database implements IDatabase {
	private readonly _prisma: PrismaClient

	constructor(prisma: PrismaClient) {
		this._prisma = prisma
	}

	public async SetupDatabase(): Promise<void> {
		try {
			this._prisma.$connect()
			console.log("Mongodb: Connected!")
		} catch (error: unknown) {
			console.log("Couldn't connect to mongodb: ", error)
		}
	}
}
