import { IDatabase } from "../interfaces/interfaces"
import { PrismaClient } from "../generated/prisma"

export class Database implements IDatabase {
	private _prisma: PrismaClient

	constructor(prisma: PrismaClient) {
		this._prisma = prisma
	}

	public async SetupDatabase(): Promise<void> {
		try {
			await this._prisma.$connect()
			console.log("Mongodb status: Connected")
		} catch (error: unknown) {
			console.log("SetupDatabase error: ", error)
		}
	}
}
