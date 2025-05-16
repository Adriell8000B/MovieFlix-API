import express from "express"
import helmet from "helmet"
import cors from "cors"
import { Server } from "./server";
import { PrismaClient } from "@prisma/client";
import { Middlewares } from "../middlewares/middlewares";
import { MovieController } from "../controllers/MovieController";
import { MovieModel } from "../models/MovieModel";
import { Router } from "../routes/routes";
import { Database } from "../database/database";

const _Express = express()
const _PORT = Number(process.env.PORT)
const _Prisma = new PrismaClient()

const _MovieModel = new MovieModel(_Prisma)
const _MovieController = new MovieController(_MovieModel)
const _Router = new Router(_Express, _MovieController)
const _Database = new Database(_Prisma)
const _Middlewares = new Middlewares(_Express, [
	express.json(),
	express.urlencoded(),
	helmet(),
	cors({
		origin: "https://movie-flix-dusky.vercel.app",
		methods: ["GET"],
	})
])

const _Server = new Server(
  _Express,
  _PORT,
  _Middlewares,
  _Database,
  _Router,
)

_Server.Init()