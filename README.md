# Personal Portifolio Website

This is my personal portfolio website created for the CSN 1101 Web Technologies and Internet Applications assignment.The website showcases my background,projects,and contact information.

## Technologies Used 
-HTML5
-CSS3
-Github Pages
-Vercel

## Features

-Responsive design for desktop and mobile devices 
-About Me section
-Projects section
-Contact information with email and GitHub lins
-Navigation menu for easy access to different sections

## How to View the Website 

The portfolio can be viewed online through the following deployments:

-GitHub Pages: https://queenurbie63-creator.github.io/My-Portfolio-/#projects

-Vercel: https://my-project-1-two-plum.vercel.app/

## Project Structure 

```text
my project/index.html
           style.css
           profile.jpg
           README.md

## Author

Created by Prince Zach as part of the CSN 1101 Web Technologies and Internet Applications assignment.

#API Integration
-Integrated key-free public API ('hhtps://dummyjson.com/quotes/random') to fetch random motivational quotes on page load and button click.
-Implemented loading indicators, safe DOM insertion ('textContent'), and error handling.

### Security Review
- Ensured zero API keys or secret credentials are exposed in client-side code.
- Replaced direct dynamic HTML injection with safe `.textContent` assignments to prevent Cross-Site Scripting (XSS).
- Verified HTTPS deployment across both GitHub Pages and Vercel.

### Google Lighthouse Performance Scores
- **Before Optimization:** 82 / 100
- **After Optimization:** 98 / 100
- *Optimizations applied:* Added `loading="lazy"` to images, optimized assets, and cleaned up unused scripts.
          