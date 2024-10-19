import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SOCIAL {
  title: string,
  alternateTitle: string,
  link: string,
  isHover: boolean
}

@Component({
  selector: 'app-socials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './socials.component.html',
  styleUrl: './socials.component.scss'
})
export class SocialsComponent {

  socials: SOCIAL[] = [
    {
      title: "instagram",
      alternateTitle: "1nstagr4m",
      link: "https://www.instagram.com/a_ismail.ai",
      isHover: false
    },
    {
      title: "linkedIn",
      alternateTitle: "l1nk3din",
      link: "https://www.instagram.com/a_ismail.ai",
      isHover: false
    },
    {
      title: "github",
      alternateTitle: "g1thub",
      link: "https://www.github.com/AnasIsmai1",
      isHover: false
    }
  ]

  onLinkHover(show: boolean, i: number) {
    show = true;
    this.socials[i].isHover = show;
  }

  onLinkLeave(show: boolean, i: number) {
    show = false;
    this.socials[i].isHover = show;
  }


}
