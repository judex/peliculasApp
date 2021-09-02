import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  public movies: Movie[] = [];

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.peliculasService.getCartelera()
      .subscribe(data => {
        // console.log(data);
        this.movies = data.results;
      });
  }

}
