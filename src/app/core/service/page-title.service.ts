import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {
  selectedMenu: string;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      this.selectedMenu = (this.router.url).split('/')[1];
    });
  }
}
