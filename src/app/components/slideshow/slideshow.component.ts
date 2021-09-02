import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { Swiper } from 'swiper';


@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styles: [
  ]
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  @Input() movies!: Movie[];
  urlImg:any = 'https://image.tmdb.org/t/p/w500';
  constructor() { }

  ngAfterViewInit(): void {
    const mySwiper = new Swiper('.swiper',{
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  ngOnInit(): void {
    console.log(this.movies );
  }

}
