export interface PROJECT {
  name: string,
  siteLink: string,
  codeLink: string,
  details: string,
  img: string,
  technologies: string[],
  isLoading: boolean,
}

const angular = "logos:angular-icon";
const js = "vscode-icons:file-type-js";
const scss = "vscode-icons:file-type-scss";
const css = "vscode-icons:file-type-css";
const html = "vscode-icons:file-type-html";
const react = "material-icon-theme:react";
const next = "logos:nextjs-icon";
const tailwind = "vscode-icons:file-type-tailwind";
const express = "simple-icons:express";
const mongodb = "logos:mongodb-icon";
const sanity = "devicon:sanity";
const socket = "cib:socket-io"

export const Projects: PROJECT[] = [
  {
    name: "Startup Plaza",
    siteLink: "https://startup-plaza.vercel.app/",
    codeLink: "https://github.com/AnasIsmai1/startup-plaza",
    details: "Startup Plaza is a Y Combinator-style directory platform where entrepreneurs can showcase their startups, and users can discover, connect with, and fund promising ventures. Built as a full-stack application with Next.js, React, Tailwind CSS, and Sanity for the CMS, it allows founders to submit startup profiles and enables users to search, contact, and support projects they believe in.",
    img: "./startup.png",
    technologies: [next, react, tailwind, sanity],
    isLoading: true,
  },
  {
    name: "Artspiree",
    siteLink: "https://artspiree.com/",
    codeLink: "https://github.com/AnasIsmai1/artspiree",
    details: "Artspiree is a portfolio website for a graphic design agency, showcasing creative works and agency services. Developed as a full-stack project using MongoDB, Express, React, and Tailwind CSS, it features dynamic portfolio management, client testimonials, and a seamless contact experience for potential clients.",
    img: "./artspiree.png",
    technologies: [mongodb, express, react, tailwind],
    isLoading: true,
  },
  {
    name: "Get In Touch Chat App",
    siteLink: "https://get-in-touch-beta.vercel.app/",
    codeLink: "https://github.com/AnasIsmai1/ChatApp-Backend.git",
    details: "Get In Touch is a real-time chat application built as a full-stack project. The backend, powered by Node.js and Express with Socket.io, enables seamless, instant messaging, while the React and Tailwind CSS frontend offers a clean and intuitive user interface for smooth communication.",
    img: "./getintouch.png",
    technologies: [express,socket,mongodb, react, tailwind],
    isLoading: true,
  },
  {
    name: "GPA Calculator",
    siteLink: "https://gpa-predictor.vercel.app/",
    codeLink: "https://github.com/AnasIsmai1/gpa-predictor/",
    details: "GPA Calculator is a user-friendly frontend web application built with React and Tailwind CSS. Users can input their course information and instantly visualize their GPA calculation results through an interactive line graph. The app focuses on clean design and usability.",
    img: "./gpa-calc.png",
    technologies: [react, tailwind, js, html, css],
    isLoading: true,
  }
]
