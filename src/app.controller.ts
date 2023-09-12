import { Controller, Get } from "@nestjs/common"
import { AppService } from "./app.service"

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	async returnMovies() {
		try {
			const movies = await this.appService.getMovies()
			return movies
		} catch(error) {
			return console.log(`App Controller: ${error}`)
		}
	}
}