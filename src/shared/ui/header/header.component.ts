import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuServiceService } from '../../../services/menu-service/menu-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {

  constructor(private menuService: MenuServiceService) {
    this.menuService.booleanValue$.subscribe(value => this.isClicked = value);
  }

  isClicked: boolean = false;
  menuShow: boolean = false;
  logoShow: boolean = false;
  @Output() menuClick = new EventEmitter();

  onElementHover(property: 'menuShow' | 'logoShow', isHovering: boolean) {
    if (screen.availWidth > 800) {
      this[property] = isHovering;
    }
  }

  onClick() {
    this.menuService.toggleBoolean(); // Call the service to toggle the value
    console.log('clicked');
    this.menuClick.emit(this.isClicked);
  }
}
