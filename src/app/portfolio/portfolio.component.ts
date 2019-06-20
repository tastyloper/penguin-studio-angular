import { Component, OnInit, AfterViewChecked, NgZone } from '@angular/core';
import { Item } from '../models/item';

import { PortfolioService } from '../services/portfolio.service';
import { AuthService } from '../services/auth.service';
import { filter } from 'minimatch';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, AfterViewChecked {

  private items: Item[];
  public showItems: Item[];
  public selected: string;
  public showPopUp = { active: false, item: null };

  constructor(
    private portfolioService: PortfolioService,
    private authService: AuthService,
    zone: NgZone
  ) {
    this.getItems();
    zone.runOutsideAngular(() => {
      setInterval(this.getItems.bind(this), 1);
      setInterval(this.filterItems.bind(this), 1);
    })
  }

  ngOnInit() {
    this.getItems();
    this.selected = 'all';
  }

  ngAfterViewChecked() {
    this.resizeAllGridItems();
  }

  // portfolioService의 ITEM 가져옴
  getItems(): void {
    this.items = this.portfolioService.items;
    this.showItems = this.items;
    // this.portfolioService.items
    //   .subscribe(items => { this.items = items; this.showItems = this.items; });
  }

  setFilter(selected: HTMLButtonElement): void {
    this.selected = selected.dataset.filter;
    this.filterItems();
  }

  filterItems() {
    const menu = {
      'all': () => { this.showItems = this.items; },
      'music': () => {this.showItems = this.items.filter(({ type }) => type === 'music');},
      'concert': () => {this.showItems = this.items.filter(({ type }) => type === 'concert');},
      'ad': () => {this.showItems = this.items.filter(({ type }) => type === 'ad');}
    }
    menu[this.selected]();
  }

  onResize(event) {
    this.resizeAllGridItems();
  }

  resizeGridItem(item) {
    const grid = document.getElementsByClassName('grid')[0];
    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    const rowSpan = Math.ceil((item.querySelector('.card > img').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
    
    item.style.gridRowEnd = `span ${rowSpan}`;
  }

  resizeAllGridItems() {
    const allItems = document.getElementsByClassName('grid-item');
    for (var x = 0; x < allItems.length; x++) {
      this.resizeGridItem(allItems[x]);
    }
  }

  popUp(item: Item) {
    this.showPopUp.active = true;
    this.showPopUp.item = item;
  }

  get isAdmin() {
    return this.authService.isAuthenticated();
  }

}
