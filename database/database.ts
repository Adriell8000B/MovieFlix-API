import { Mongoose } from "mongoose"
import { IDatabase } from "../interfaces/general"
import { urlencoded } from "express"

class Database implements IDatabase {
	private readonly _mongoose: Mongoose

	constructor(
		mongoose: Mongoose
	) {
		this._mongoose = mongoose
	}

	private async $connect(): Promise<void> {
		try {
			await this._mongoose.connect(String(process.env.MONGODB_URI))
			console.log("Database status: \x1b[32mConnected\x1b[0m")
		} catch(error) {
			console.error(error)
		}
	}

	public SetupDatabase(): void {
		this.$connect()
	}
}

export default Database