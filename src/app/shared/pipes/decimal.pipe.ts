import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimal'
})
export class DecimalPipe implements PipeTransform {

  transform(value: number, decimals: number): string {
    /** Check if value is not integer */
    if (value % 1 !== 0) {
      return value.toFixed(decimals);
    }
    return value.toString();
  }

}
