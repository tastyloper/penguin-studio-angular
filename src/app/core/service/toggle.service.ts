import { Injectable } from '@angular/core';

@Injectable()
export class ToggleService {
  isMenuActive = false;

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }
}
