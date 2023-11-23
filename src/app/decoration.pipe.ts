import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decoration'
})
export class DecorationPipe implements PipeTransform {

  transform(value: string): unknown {
    return "<< "+ value + " >>";
  }

}
