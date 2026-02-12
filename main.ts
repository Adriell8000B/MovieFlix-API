import express from "express"
import cors from "cors"
import { Server } from "./server/Server"
import { Router } from "./router/Router"
import { MiddlewaresManager } from "./middlewares/MiddlewaresManager"
import { MovieController } from "./controllers/MovieController"
import { SupabaseProvider } from "./providers/SupabaseProvider"
import { MovieRepository } from "./repositories/MovieRepository"
import { GetEnv } from "./utils/GetEnv"
import { SupabaseFactory } from "./factories/SupabaseFactory"

const Express = express()
const Supabase = SupabaseFactory.Create()
const PORT = Number(GetEnv("PORT"))

const movie_repository = MovieRepository.GetInstance(Supabase)
const movie_controller = MovieController.GetInstance(movie_repository)
const router = Router.GetInstance(Express, movie_controller)
const middlewares_manager = MiddlewaresManager.GetInstance(Express, [
	express.json(),
	express.urlencoded({extended: true}),
	cors({
		allowedHeaders: GetEnv("CORS_ALLOWED_HEADERS"),
		methods: GetEnv("CORS_METHODS"),
		origin: GetEnv("CORS_ORIGIN")
	})
])
const database_service = SupabaseProvider.GetInstance(Supabase)
const server = Server.GetInstance(PORT, Express, router, middlewares_manager,database_service)

server.Init()