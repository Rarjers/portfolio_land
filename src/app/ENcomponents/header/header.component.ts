import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  burgerOpen = false;

  toogleBurgerMenu() {
    this.burgerOpen = !this.burgerOpen;
  }
}
