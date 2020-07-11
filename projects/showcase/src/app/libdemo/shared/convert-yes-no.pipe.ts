import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertYesNo'
})
export class ConvertYesNoPipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): string {
    return value ? 'yes' : 'no';
  }

}
