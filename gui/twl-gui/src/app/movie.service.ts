import { Movie } from './movie';
export class MovieService {
  movie: Movie[] = [];

  gravar(movie: Movie): void {
     this.movie.push(movie);
     this.movie.sort(function (a, b) {
        if (a.priority <= b.priority) {
          return 1;
        }
        if (a.priority > b.priority) {
          return 0;
        }
        return -1
      });
  }
}