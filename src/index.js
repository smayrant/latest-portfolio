import "./styles/main.scss";
import heroBG from "./img/blue-bg.svg";
import lgHeroBG from "./img/lg-hero-bg.svg";
import heroBGFigs from "./img/hero-bg-shapes.png";
import orangeBall from "./img/bg-figure-orange-ball.png";
import pinkFig from "./img/bg-figure-pink.png";
import ltPinkCube from "./img/lt-pink-cube.png";
import purpleBall from "./img/bg-figure-purple-ball.png";
import whiteCube from "./img/white-cube.png";
import whiteCubeLg from "./img/white-cube-lg.png";
import purpleCube from "./img/purple-cube.png";
import blueCube from "./img/blue-cube.png";
import showPreview from "./img/showtrackr.jpg";
import moviePreview from "./img/movie-seeker.jpg";
import SGPreview from "./img/sgassociates.jpg";
import fitPreview from "./img/fit4less.jpg";
import contactBG from "./img/contact-bg.png";
import footerBG from "./img/bg-footer.png";

// hero images

const heroImg = document.querySelector(".hero__img");
if (heroImg !== null) {
  heroImg.src = heroBG;
}

const heroImgLg = document.querySelector(".hero__img--lg");
if (heroImgLg !== null) {
  heroImgLg.src = lgHeroBG;
}

const heroFigs = document.querySelector(".hero__shapes");
if (heroFigs !== null) {
  heroFigs.src = heroBGFigs;
}

const smWhiteCube = document.querySelector(".hero__bg-cube-sm");
if (smWhiteCube !== null) {
  smWhiteCube.src = whiteCube;
}

const lgWhiteCube = document.querySelector(".hero__bg-cube-lg");
if (lgWhiteCube !== null) {
  lgWhiteCube.src = whiteCubeLg;
}

// What I Do figures

const whatIDoCube = document.querySelector(".what-i-do__pink-cube");
if (whatIDoCube !== null) {
  whatIDoCube.src = ltPinkCube;
}

const whatIDoCubeWhiteSm = document.querySelector(".what-i-do__white-cube--sm");
if (whatIDoCubeWhiteSm !== null) {
  whatIDoCubeWhiteSm.src = whiteCube;
}

const whatIDoCubeWhite = document.querySelector(".what-i-do__white-cube");
if (whatIDoCubeWhite !== null) {
  whatIDoCubeWhite.src = whiteCubeLg;
}

// About me section images
const leftAboutMeCube = document.querySelector(".about-me__purple-cube--left");
if (leftAboutMeCube !== null) {
  leftAboutMeCube.src = purpleCube;
}

const rightAboutMeCube = document.querySelector(
  ".about-me__purple-cube--right"
);
if (rightAboutMeCube !== null) {
  rightAboutMeCube.src = purpleCube;
}

const aboutMeOrangeBall = document.querySelector(".about-me__orange-ball");
if (aboutMeOrangeBall !== null) {
  aboutMeOrangeBall.src = orangeBall;
}

const aboutMePinkCube = document.querySelector(".about-me__pink-cube");
if (aboutMePinkCube !== null) {
  aboutMePinkCube.src = pinkFig;
}

const aboutMeBlueCube = document.querySelector(".about-me__blue-cube");
if (aboutMeBlueCube !== null) {
  aboutMeBlueCube.src = blueCube;
}

const aboutMePurpleBall = document.querySelector(".about-me__purple-ball");
if (aboutMePurpleBall !== null) {
  aboutMePurpleBall.src = purpleBall;
}

const aboutMePurpleBall2 = document.querySelector(
  ".about-me__purple-ball--second"
);
if (aboutMePurpleBall2 !== null) {
  aboutMePurpleBall2.src = purpleBall;
}

// Work Images
const workCube = document.querySelector(".work__bg-cube");
if (workCube !== null) {
  workCube.src = ltPinkCube;
}

const showtrackr = document.querySelector(".showTrackrImg");
if (showtrackr !== null) {
  showtrackr.src = showPreview;
}

const movieSeeker = document.querySelector(".movieSeekerImg");
if (movieSeeker !== null) {
  movieSeeker.src = moviePreview;
}

const SGassociates = document.querySelector(".SGAssociatesImg");
if (SGassociates !== null) {
  SGassociates.src = SGPreview;
}

const fit4less = document.querySelector(".fit4lessImg");
if (fit4less !== null) {
  fit4less.src = fitPreview;
}

// contact images
const contactBGImg = document.querySelector(".contact__bg");
if (contactBGImg !== null) {
  contactBGImg.src = contactBG;
}

// footer images

const bgFooter = document.querySelector(".footer");
if (bgFooter !== null) {
  bgFooter.style.backgroundImage = `url("${footerBG}")`;
}
