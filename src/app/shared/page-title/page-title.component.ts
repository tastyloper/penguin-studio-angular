import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit {
  selectedMenu = 'portfolio';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      this.selectedMenu = (this.router.url).split('/')[1];
    });
  }
}
