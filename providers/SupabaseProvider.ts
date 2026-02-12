
import { ISupabaseProvider } from "../interfaces/ISupabaseProvider"
import { HandlePromise } from "../utils/HandlePromise"
import { SupabaseClient } from "@supabase/supabase-js"

export class SupabaseProvider implements ISupabaseProvider {
	private static _instance: SupabaseProvider | null = null

	constructor (
		private readonly _supabase: SupabaseClient
	) {}

	public static GetInstance(_supabase: SupabaseClient) {
		if(!this._instance) {
			this._instance = new SupabaseProvider(_supabase)
		}

		return SupabaseProvider._instance!
	}

	private async connect() {
    const { error } = await this._supabase.from('movies').select('*').limit(0)
    if (error && error.code !== 'PGRST116' && error.code !== '42P01') {
      throw new Error(`Could not reach Supabase: ${error.message}`)
    }

    console.log("✅ Supabase connection verified.")
  }

	public SetupSupabaseProvider(): void {
		this.connect()
	}

}