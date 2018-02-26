import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'total',
    pure: false
})
export class TotalPipe implements PipeTransform {
    transform(items: any[], attr1: string, attr2: string): any {
        return items.reduce((a, b) => a + b[attr1] * b[attr2], 0);
    }
}
