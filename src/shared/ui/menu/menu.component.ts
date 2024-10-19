import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SocialsComponent } from '../socials/socials.component';
import { MenuServiceService } from '../../../services/menu-service/menu-service.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, SocialsComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  liClicked: boolean = false

  constructor(private menuService: MenuServiceService) {
    this.menuService.booleanValue$.subscribe(value => this.liClicked = value);
  }

  @Output() liStatus = new EventEmitter();

  onClick() {
    this.menuService.toggleBoolean(); // Call the service to toggle the value
  }

}
