import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedMenu: string;

  constructor(
    private router: Router,
   
    ) {
      this.selectedMenu = 'portfolio';
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      this.selectedMenu = (this.router.url).split('/')[1];
    });
  }

}
