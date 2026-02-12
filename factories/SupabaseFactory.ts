import { createClient, SupabaseClient } from "@supabase/supabase-js"
import { GetEnv } from "../utils/GetEnv"

export class SupabaseFactory {
  public static Create(): SupabaseClient {
    const url = GetEnv("SUPABASE_URL")
    const key = GetEnv("SUPABASE_KEY")

    if (!url || !key) {
      throw new Error("Supabase credentials missing in environment variables.")
    }

    return createClient(url, key)
  }
}