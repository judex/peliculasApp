import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SwiperModule } from 'swiper/angular';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent
  ],
  exports: [
    NavbarComponent,
    SlideshowComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    RouterModule,
    SwiperModule,
    PipesModule
  ]
})
export class ComponentsModule { }
