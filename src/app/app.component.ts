import { Component } from '@angular/core';
import { MenuServiceService } from '../services/menu-service/menu-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  menuHidden: boolean = false;
  constructor(private menuService: MenuServiceService) {
    this.menuService.booleanValue$.subscribe(value => this.menuHidden = value);
  }
}
