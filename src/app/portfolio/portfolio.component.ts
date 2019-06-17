import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { PortfolioService } from '../portfolio.service'
import { IsotopeOptions, IsotopeGridComponent } from 'ngx-isotope';
import { BrowserModule } from '@angular/platform-browser';
import { WINDOW } from "../window.service";
import { Item } from "./item";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public myOptions: IsotopeOptions = {
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-sizer',
      gutter: '.gutter-sizer'
    }
  };

  private items: Item[];
  public showItems: Item[];
  public isScroll: boolean = false;
  public selected: string;

  constructor(
    private portfolioService: PortfolioService
    ) { }

  ngOnInit() {
    this.getItems();
    this.selected = 'all';
  }

  // window scroll event 등록!
  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.portfolioService.setIsScroll();
  }

  // portfolioService의 ITEM 가져옴
  getItems(): void {
    this.portfolioService.getItems()
      .subscribe(items => { this.items = items; this.showItems = this.items; });
    
  }

  filterItems(selected: HTMLButtonElement): void {
    this.selected = selected.getAttribute('data-filter');
    const menu = {
      'all': () => { this.showItems = this.items; },
      'music': () => {this.showItems = this.items.filter(({ subject }) => subject === 'music');},
      'concert': () => {this.showItems = this.items.filter(({ subject }) => subject === 'concert');},
      'ad': () => {this.showItems = this.items.filter(({ subject }) => subject === 'ad');}
    }
    menu[this.selected]();
  }
}
