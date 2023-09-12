import { PrismaService } from "./prisma.service"
import { Injectable } from "@nestjs/common"

@Injectable()
export class AppService {
	constructor(private prisma: PrismaService) {}

	async getMovies() {
		try {
			const movies = await this.prisma.movies.findMany()
			return movies
		} catch(error) {
			return console.log(`App Service: ${error}`)
		}
	}
}