import { PrismaClient } from "@prisma/client"
import { IDatabase } from "../interfaces/interfaces"

export class MDatabase implements IDatabase {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
        this.connectDatabase()
    }

    async connectDatabase() {
        return await this.prisma.$connect()
    }

    async getMovies() {
        return await this.prisma.movies.findMany()
    }
}