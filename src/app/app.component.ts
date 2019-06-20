import { Component } from '@angular/core';
import { fadeAnimation } from './core/animation/fade.animation';

@Component({
  selector: 'app-root',
  animations: [fadeAnimation],
  template: `
    <div class="wrapper">
      <app-header></app-header>
      <div class="contents-wrap">
        <div class="contents" [@fadeAnimation]="getRouterOutletState(outlet)">
          <app-page-title></app-page-title>
          <router-outlet #outlet="outlet"></router-outlet>
        </div>
        <app-footer></app-footer>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
