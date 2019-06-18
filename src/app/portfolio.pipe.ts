import { Pipe, PipeTransform } from '@angular/core';

import { Item } from './portfolio/item';
@Pipe({
  name: 'filterBy'
})
export class PortfolioPipe implements PipeTransform {
  
  transform(items: Item[], selected: string): any {
    if (selected === 'all') return items;
    else return items.filter(({subject}) => subject === selected);
  }

}
