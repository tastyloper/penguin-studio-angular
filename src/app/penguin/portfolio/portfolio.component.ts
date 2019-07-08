import { Component } from '@angular/core';
import { PortfolioNavItem } from '../../core/models/portfolioNavItem.type';
import { PortfolioService } from '../../core/service/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent{
  navItems: PortfolioNavItem[] = ['all', 'music', 'concert', 'ad'];
  navState: PortfolioNavItem = 'all';

  constructor(public portfolioService: PortfolioService) {}



}
