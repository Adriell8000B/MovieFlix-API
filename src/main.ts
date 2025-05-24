import express from "express"
import helmet from "helmet"
import cors from "cors"
import { PrismaClient } from "../generated/prisma"
import { Server } from "./server"
import { Router } from "../router/router"
import { Middlewares } from "../middlewares/middlewares"
import { Database } from "../database/database"
import { MovieController } from "../controllers/MovieController"
import { MovieModel } from "../models/MovieModel"

const _express = express()
const _prisma = new PrismaClient()
const _MovieModel = new MovieModel(_prisma)
const _MovieController = new MovieController(_MovieModel)
const _Router = new Router(_express, _MovieController)
const _Middlewares = new Middlewares(_express, [
	express.json(),
	express.urlencoded(),
	helmet(),
	cors({
		origin: ["https://movie-flix-dusky.vercel.app"],
		methods: ["GET"],
	}),
])
const _Database = new Database(_prisma)
const _Server = new Server(
	_express,
	Number(process.env["PORT"]),
	_Router,
	_Middlewares,
	_Database
)

_Server.Init()
