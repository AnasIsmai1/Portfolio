import { Component, Output, EventEmitter, OnInit } from '@angular/core';
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

export class HeaderComponent implements OnInit {

  constructor(private menuService: MenuServiceService) {
    this.menuService.booleanValue$.subscribe(value => this.isClicked = value);
  }
  ngOnInit(): void {
    this.isDarkTheme = document.documentElement.getAttribute('data-theme') == 'dark' ? true : false;
  }

  isDarkTheme: boolean = true;
  isClicked: boolean = false;
  menuShow: boolean = false;
  logoShow: boolean = false;
  @Output() menuClick = new EventEmitter();

  onThemeToggle() {
    this.isDarkTheme = !this.isDarkTheme;
    if (document.documentElement.getAttribute('data-theme') == 'dark') {
      document.documentElement.setAttribute('data-theme', 'light')
    } else {
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }

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
