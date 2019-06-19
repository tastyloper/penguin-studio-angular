import { Component } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent {
  constructor(private authService: AuthService) {}

  get isAdmin() {
    return this.authService.isAuthenticated();
  }

}
