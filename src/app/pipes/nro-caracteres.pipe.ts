import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nroCaracteres'
})
export class NroCaracteresPipe implements PipeTransform {

  transform(value: string, nro: number ): string {
    return value.substring(0,nro);
  }

}
