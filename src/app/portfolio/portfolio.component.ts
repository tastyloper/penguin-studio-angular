import { Component, OnInit, OnChanges, HostListener } from '@angular/core';
import { PortfolioService } from '../portfolio.service'
import { IsotopeOptions} from 'ngx-isotope';
import { Item } from "./item";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnChanges {

  public myOptions: IsotopeOptions = {
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-sizer',
      gutter: '.gutter-sizer'
    }
  };

  public items: Item[];
  public isScroll: boolean = false;
  public selected: string;

  constructor(
    private portfolioService: PortfolioService
    ) { }

  ngOnInit() {
    this.getItems();
    this.selected = 'all';
  }

  ngOnChanges() {
    this.getItems();
  }

  // window scroll event 등록!
  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.portfolioService.setIsScroll();
  }

  // portfolioService의 ITEM 가져옴
  getItems(): void {
    this.portfolioService.getItems()
      .subscribe(items => { this.items = items; });
    
  }

  filterItems(selected: HTMLButtonElement): void {
    this.selected = selected.dataset.filter;
  }
}
