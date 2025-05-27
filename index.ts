import express from "express"
import helmet from "helmet"
import cors from "cors"
import { Database } from "./data/database"
import { PrismaClient } from "./generated/prisma"
import { Server } from "./src/server"
import { Router } from "./router/router"
import { MovieRepository } from "./repositories/MovieRepository"
import { MovieController } from "./controllers/MovieController"
import { MiddlewareApplier } from "./middlewares/middlewares"

const _express = express()
const _prisma = new PrismaClient()
const _Database = new Database(_prisma)
const _MovieRepository = new MovieRepository(_prisma)
const _MovieController = new MovieController(_MovieRepository)
const _Router = new Router(_express, _MovieController)

const _MiddlewaresApplier = new MiddlewareApplier(_express, [
  express.urlencoded({extended: true}),
  express.json(),
  helmet(),
  cors({
    origin: process.env["ALLOWED_ORIGIN"],
    methods: process.env["ALLOWED_METHODS"]
  })
])

const _Server = new Server(
  _express,
  Number(process.env["PORT"]),
  _Database,
  _Router,
  _MiddlewaresApplier
)

_Server.Init()