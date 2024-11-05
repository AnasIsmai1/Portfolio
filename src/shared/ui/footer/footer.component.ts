import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SocialsComponent } from '../socials/socials.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, SocialsComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})

export class FooterComponent {

  topShow: boolean = false

  onHover(isHovering: boolean) {
    if (screen.availWidth > 800) { this.topShow = isHovering; }
  }

  goToTop() {
    document.documentElement.scrollTo(0, 0);
  }

}
