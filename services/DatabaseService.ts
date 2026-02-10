import { Mongoose } from "mongoose"
import { IDatabaseService } from "../interfaces/IDatabaseService"
import { HandlePromise } from "../utils/HandlePromise"
import { GetEnv } from "../utils/GetEnv"

export class DatabaseService implements IDatabaseService {
	private static _instance: DatabaseService | null = null

	constructor (
		private readonly _mongoose: Mongoose
	) {}

	public static GetInstance(_mongoose: Mongoose) {
		if(!this._instance) {
			this._instance = new DatabaseService(_mongoose)
		}

		return DatabaseService._instance!
	}

	private async connect() {
		const [_, error] = await HandlePromise(this._mongoose.connect(GetEnv("DATABASE_URL")))

		if (error) {
			throw new Error(`Coudldn't connect to database: ${error}`)
		}

		console.log("Connected!")
	}

	public SetupDatabaseService(): void {
		this.connect()
	}
}