import express from "express"
import cors from "cors"
import Server from "./server/server"
import mongoose from "mongoose"
import Database from "./database/database"
import MovieRepository from "./repositories/MovieRepository"
import MovieController from "./controllers/MovieController"
import MovieModel from "./models/MovieModel"
import Router from "./router/router"
import Middlewares from "./middlewares/Middlewares"

const _Express = express()
const _Mongoose = mongoose
const _MovieModel = MovieModel

const _Database = new Database(_Mongoose)
const _MovieRepository = new MovieRepository(_MovieModel)
const _MovieController = new MovieController(_MovieRepository)
const _Router = new Router(_Express, _MovieController)
const _Middlewares = new Middlewares(_Express, [
	express.urlencoded(),
	express.json(),
	cors({
		origin: process.env.ORIGIN,
		methods: "GET, POST",
		credentials: true
	})
])
const _Server = new Server(
	_Express,
	_Router,
	_Database,
	_Middlewares,
	3333
)

_Server.Init()