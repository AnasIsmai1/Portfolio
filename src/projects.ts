export interface PROJECT {
  name: string,
  siteLink: string,
  codeLink: string,
  details: string,
  img: string,
  technologies: string[],
}
export const Projects: PROJECT[] = [
  {
    name: "Glint Landing Page",
    siteLink: "https://anas-sdeprj-glint-landing-page.netlify.app/",
    codeLink: "https://github.com/AnasIsmai1/Glint",
    details: "This project demonstrates API integration skills by using the Jikan API to fetch data from MyAnimeList. The webpage, built with HTML, CSS, and JavaScript, dynamically renders content cards, which are added to the DOM via document fragments for improved performance.",
    img: "./Glint.png",
    technologies: ["scss", "html", "js", "css"]
  },
  {
    name: 'Anime Data List',
    siteLink: "https://anas-anime-list.netlify.app/",
    codeLink: "https://github.com/AnasIsmai1/popular-anime-data",
    details: "This project demonstrates API integration skills by using the Jikan API to fetch data from MyAnimeList. The webpage, built with HTML, CSS, and JavaScript, dynamically renders content cards, which are added to the DOM via document fragments for improved performance.",
    img: "./Anime.png",
    technologies: ["scss", "html", "js", "css"]
  }, {
    name: 'Shades Landing Page',
    siteLink: "https://anas-sdeprj-shades-landing-page.netlify.app/",
    codeLink: "https://github.com/AnasIsmai1/Websites/tree/main/Shades-Landing-Page",
    details: "This project is a news landing page. This was made using Angular, I made use of components to create the articles at the bottom and dynamically render them in.",
    img: "./Shades.png",
    technologies: ["html", "js", "css"]
  },
  {
    name: 'News Homepage',
    siteLink: "https://anas-sdeprj-news-homepage.vercel.app/",
    codeLink: "https://github.com/AnasIsmai1/News-Homepage-Main",
    details: "This project is a news landing page. This was made using Angular, I made use of components to create the articles at the bottom and dynamically render them in.",
    img: "./News.png",
    technologies: ["angular", "scss", "html", "js", "css"]
  }
]
