import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: any, filter: any, filterItems: Array<any>, isAnd: boolean): any {
    if (filter && Array.isArray(products) && filterItems) {
      const filterKeys = Object.keys(filter);
      const checkedItems = filterItems.filter(product => product.checked);
      if (!checkedItems || checkedItems.length === 0) { return products; }
      if (isAnd) {
        return products.filter(product =>
            filterKeys.reduce((acc1, keyName) =>
                (acc1 && checkedItems.reduce((acc2, checkedItem) =>
                acc2 && new RegExp(product[keyName], 'gi').test(checkedItem.feature) || checkedItem.feature === '', true))
              , true)
              );
      } else {
        return products.filter(product => {
          return filterKeys.some((keyName) => {
            return checkedItems.some((checkedItem) => {
              return new RegExp(product[keyName], 'gi').test(checkedItem.feature) || checkedItem.feature === '';
            });
          });
        });
      }
    } else {
      return products;
    }
  }
}

