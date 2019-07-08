import { Pipe, PipeTransform } from '@angular/core';
import { Portfolio } from '../models/portfolio.interface';
import { PortfolioNavItem } from '../models/portfolioNavItem.type';

@Pipe({
  name: 'portfoliosFilter'
})
export class PortfoliosFilterPipe implements PipeTransform {

  transform(portfolios: Portfolio[], navState: PortfolioNavItem): Portfolio[] {
    return portfolios.filter(({ type }) => {
      if (navState === 'music') { return type === 'music'; }
      if (navState === 'concert') { return type === 'concert'; }
      if (navState === 'ad') { return type === 'ad'; }
      return true;
    });
  }

}
