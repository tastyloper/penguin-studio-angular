import { Component } from '@angular/core';

@Component({
  selector: 'app-penguin',
  template: `
    <app-page-title></app-page-title>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `
})
export class PenguinComponent {}
