import { movies } from "../generated/prisma";

export interface IMovieRepository {
  ReadMovies(): Promise<movies[]>
}