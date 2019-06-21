import { Pipe, PipeTransform } from '@angular/core';

import { Item } from '../models/item';

@Pipe({
  name: 'sort'
})
export class PortfolioPipe implements PipeTransform {
  transform(items: Item[]): any {
    return items.sort();
  }
}
