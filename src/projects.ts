export interface PROJECT {
  name: string,
  siteLink: string,
  codeLink: string,
  details: string,
  img: string,
  technologies: string[],
  isLoading: boolean,
}

const angular = "angular fa-angular";
const js = "js fa-square-js";
const scss = "scss fa-sass";
const css = "css fa-css3-alt";
const html = "html fa-html5";
const react = "react fa-react";

export const Projects: PROJECT[] = [

  {
    name: "GPA Calculator",
    siteLink: "https://gpa-predictor.vercel.app/",
    codeLink: "https://github.com/AnasIsmai1/gpa-predictor/",
    details: "This GPA Calculator is a user-friendly web application built with React and Tailwind CSS. It features a clean interface where users can input their course information and instantly see their GPA calculation results visualized through an interactive line graph.",
    img: "./gpa-calc.png",
    technologies: [html, js, css, react],
    isLoading: true,
  },
  {
    name: "Get In Touch Chat App",
    siteLink: "https://get-in-touch-beta.vercel.app/",
    codeLink: "https://github.com/AnasIsmai1/ChatApp-Backend.git",
    details: "This real-time chat application leverages WebSocket technology to enable instant messaging between users. Built with Node.js and Express on the backend, it uses Socket.io to manage WebSocket connections, allowing for seamless bidirectional communication. The frontend is crafted with React, featuring a clean and intuitive user interface.",
    img: "./getintouch.png",
    technologies: [html, js, css, react],
    isLoading: true,
  },
  {
    name: "Glint Landing Page",
    siteLink: "https://anas-sdeprj-glint-landing-page.netlify.app/",
    codeLink: "https://github.com/AnasIsmai1/Glint",
    details: "This project demonstrates API integration skills by using the Jikan API to fetch data from MyAnimeList. The webpage, built with HTML, CSS, and JavaScript, dynamically renders content cards, which are added to the DOM via document fragments for improved performance.",
    img: "./Glint.png",
    technologies: [scss, html, js, css],
    isLoading: true,
  },
  {
    name: 'Anime Data List',
    siteLink: "https://anas-anime-list.netlify.app/",
    codeLink: "https://github.com/AnasIsmai1/popular-anime-data",
    details: "This project demonstrates API integration skills by using the Jikan API to fetch data from MyAnimeList. The webpage, built with HTML, CSS, and JavaScript, dynamically renders content cards, which are added to the DOM via document fragments for improved performance.",
    img: "./Anime.png",
    technologies: [scss, html, js, css],
    isLoading: true,
  }
]
