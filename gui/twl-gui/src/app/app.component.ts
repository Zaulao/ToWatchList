import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Movie } from './movie';
import { MovieService } from './movie.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  movie: Movie = {name: "", priority:0};
  movieService = new MovieService();
  movies : Movie[] = [];

  gravar(a: Movie): void {
    this.movieService.gravar(a);
    this.movies.push(a);
    this.movies.sort(function (a, b) {
      if (a.priority >= b.priority) {
        return 1;
      }
      if (a.priority < b.priority) {
        return 0;
      }
      return -1
    });
    this.movie = {name: "", priority: 0};
 }
}
