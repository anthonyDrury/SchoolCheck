import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'NoDataPipe'
})
export class NoDataPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === undefined || value == null) { return 'N/A'; }
    return value;
  }

}
