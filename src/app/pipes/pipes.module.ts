import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { NroCaracteresPipe } from './nro-caracteres.pipe';


@NgModule({
  declarations: [
    NroCaracteresPipe
  ],
  exports:[NroCaracteresPipe],
  imports: [
    CommonModule,
    PipesRoutingModule
  ]
})
export class PipesModule { }
