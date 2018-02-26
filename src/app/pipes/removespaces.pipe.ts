import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removespaces'
})
export class RemoveSpacesPipe implements PipeTransform {

  transform(value: any): any {
    return value.replace(/ /g, '_');
  }
}
