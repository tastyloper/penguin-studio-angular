import { Component } from '@angular/core';
import { ToggleService } from '../../core/service/toggle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public toggleService: ToggleService) { }
}
