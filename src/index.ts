import express from "express"
import helmet from "helmet"
import cors from "cors"
import { App } from "./app";
import { Middlewares } from "../models/middlewares.service";
import { DatabaseController } from "../controllers/database.controller";
import { DatabaseModel } from "../models/database.service"
import { Router } from "../routes/routes";

const Express = express()

const middlewares = new Middlewares(Express, [
	express.json(),
	express.urlencoded(),
	helmet(),
	cors({
		origin: "https://movie-flix-dusky.vercel.app",
		methods: ["GET"],
	})
])

const databaseModel = new DatabaseModel()
const databaseController = new DatabaseController(databaseModel)
const router = new Router(Express, databaseController)

const Server = new App(
	Express,
	3333,
	middlewares,
	databaseController,
	router
)

Server.init()