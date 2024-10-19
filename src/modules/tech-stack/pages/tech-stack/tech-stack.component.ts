import { Component } from '@angular/core';

interface STACK {
  badge: string,
  title: string,
  class: string,
  link?: string
}

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss'
})
export class TechStackComponent {

  stack: STACK[] = [
    {
      badge: "framework",
      title: "angular",
      class: "fa-brands fa-angular",
      link: "https://angular.dev/"
    },
    {
      badge: "music",
      title: "spotify",
      class: "fa-brands fa-spotify",
      link: "https://www.spotify.com/"
    },
    {
      badge: "ui design",
      title: "figma",
      class: "fa-brands fa-figma",
      link: "https://www.figma.com/"
    },
    {
      badge: "OS",
      title: "linux",
      class: "fa-brands fa-linux",
      link: "https://ubuntu.com/"
    },
    {
      badge: "File Storage",
      title: "Google drive",
      class: "fa-brands fa-google-drive",
      link: "https://workspace.google.com/products/drive/"
    },
    {
      badge: "Database",
      title: "MonogoDB",
      class: "fa-solid fa-database",
      link: "https://www.mongodb.com/"
    },
    {
      badge: "Communication",
      title: "Discord",
      class: "fa-brands fa-discord",
      link: "https://discord.com/"
    },
  ]

}
