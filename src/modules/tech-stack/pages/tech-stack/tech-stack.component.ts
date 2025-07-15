import { Component } from '@angular/core';

interface STACK {
  badge: string,
  title: string,
  class: string,
  link?: string,
  style?: string
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
      title: "Angular",
      class: "simple-icons:angular",
      link: "https://angular.dev/"
    },
    {
      badge: "server",
      title: "Express",
      class: "simple-icons:express",
      link: "https://expressjs.com/"
    },
    {
      badge: "relational database",
      title: "MySQL",
      class: "lineicons:mysql",
      link: "https://www.mysql.com/"
    },
    {
      badge: "library (UI dev)",
      title: "React",
      class: "lineicons:react",
      link: "https://react.dev/"
    },
    {
      badge: "react framework",
      title: "Next.js",
      class: "ri:nextjs-fill",
      link: "https://nextjs.org/"
    },
    {
      badge: "containerization",
      title: "Docker",
      class: "fa6-brands:docker",
      link: "https://www.docker.com/"
    },
    {
      badge: "language",
      title: "Go",
      class: "cib:go",
      link: "https://go.dev/",
      style: "font-size:15rem;"
    },
    {
      badge: "music",
      title: "Spotify",
      class: "mdi:spotify",
      link: "https://www.spotify.com/"
    },
    {
      badge: "ui design",
      title: "Figma",
      class: "solar:figma-bold-duotone",
      link: "https://www.figma.com/"
    },
    {
      badge: "Preprocessor",
      title: "SCSS",
      class: "bi:filetype-scss",
      link: "https://www.sass-lang.com/"
    },
    {
      badge: "File Storage",
      title: "Google Drive",
      class: "ri:drive-fill",
      link: "https://workspace.google.com/products/drive/"
    },
    {
      badge: "Non-Relational Database",
      title: "MongoDB",
      class: "lineicons:mongodb",
      link: "https://www.mongodb.com/"
    },
    {
      badge: "Communication",
      title: "Discord",
      class: "ic:baseline-discord",
      link: "https://discord.com/"
    },
    {
      badge: "Editor",
      title: "Neovim",
      class: "devicon-plain:neovim",
      link:"https://neovim.io/"
    }
  ]

}
