import { Component } from '@angular/core';
import { fadeAnimation } from './core/animation/fade.animation';

@Component({
  selector: 'app-root',
  animations: [fadeAnimation],
  template: `
    <app-header></app-header>
    <div class="contents" [@fadeAnimation]="getRouterOutletState(outlet)">
      <router-outlet #outlet="outlet"></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
