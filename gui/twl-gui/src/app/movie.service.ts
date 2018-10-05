import { Movie } from './movie';
export class MovieService {
  movie: Movie[] = [];

  gravar(movie: Movie): void {
     this.movie.push(movie);
     this.movie.sort(function(a, b){return a.priority < b.priority ? 1:0});
  }
}