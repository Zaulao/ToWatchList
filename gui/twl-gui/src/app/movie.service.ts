import { Movie } from './movie';
export class MovieService {
  movie: Movie[] = [];
  
  gravar(movie: Movie): void {
     this.movie.push(movie);
  }
}