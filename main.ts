import express from "express"
import { Server } from "./server/Server"
import { Router } from "./router/Router"
import { MiddlewaresManager } from "./middlewares/MiddlewaresManager"
import { MovieController } from "./controllers/MovieController"
import { MovieRepository } from "./repositories/MovieRepository"
import { DatabaseService } from "./services/DatabaseService"
import MovieModel from "./models/MovieModel"
import mongoose from "mongoose"
import { GetEnv } from "./utils/GetEnv"

const Express = express()
const Mongoose = mongoose
const PORT = Number(GetEnv("PORT"))

const movie_repository = MovieRepository.GetInstance(MovieModel)
const movie_controller = MovieController.GetInstance(movie_repository)
const router = Router.GetInstance(Express, movie_controller)
const middlewares_manager = MiddlewaresManager.GetInstance(Express, [
	express.json(),
	express.urlencoded({extended: true})
])
const database_service = DatabaseService.GetInstance(Mongoose)
const server = Server.GetInstance(PORT, Express, router, middlewares_manager,database_service)

server.Init()