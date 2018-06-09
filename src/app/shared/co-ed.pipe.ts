import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CoEdPipe'
})
export class CoEdPipe implements PipeTransform {

  transform(value: string): string {
    if (value === undefined || value == null) { return 'N/A'; }
    value.replace('Coed', 'Co-ed');
    return value;
  }

}
