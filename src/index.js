import "./styles/main.scss";
import blueBG from "./img/blue-bg.svg";
import blueBall from "./img/bg-figure-blue-ball.png";
import blueFig from "./img/bg-figure-lt-blue.png";
import orangeBall from "./img/bg-figure-orange-ball.png";
import pinkFig from "./img/bg-figure-pink.png";
import purpleBall from "./img/bg-figure-purple-ball.png";
import purpleBase from "./img/bg-figure-purple-base.png";
import purpleFig from "./img/bg-figure-purple.png";
import yellowFig from "./img/bg-figure-yellow.png";
import whiteCube from "./img/hero-cube.png";
import whiteCubeLg from "./img/hero-cube-lg.png";
import purpleCube from "./img/purple-cube.png";
import blueCube from "./img/blue-cube.png";
import showPreview from "./img/showtrackr.jpg";
import moviePreview from "./img/movie-seeker.jpg";
import SGPreview from "./img/sgassociates.jpg";
import fitPreview from "./img/fit4less.jpg";
import footerBG from "./img/bg-footer.png";

// hero images

const heroBG = document.querySelector(".hero");
heroBG.style.backgroundImage = `url("${blueBG}")`;

// hero figures
const blueBallFig = document.querySelector(".blue-ball-fig");
blueBallFig.src = blueBall;

const ltBlueFig = document.querySelector(".lt-blue-fig");
ltBlueFig.src = blueFig;

const orangeBallFig = document.querySelector(".orange-ball-fig");
orangeBallFig.src = orangeBall;

const pinkCube = document.querySelector(".pink-fig");
pinkCube.src = pinkFig;

const purpleBallFig = document.querySelector(".purple-ball-fig");
purpleBallFig.src = purpleBall;

const purpleBaseFig = document.querySelector(".purple-base-fig");
purpleBaseFig.src = purpleBase;

const ltPurpleFig = document.querySelector(".purple-fig");
ltPurpleFig.src = purpleFig;

const yellowBlock = document.querySelector(".yellow-fig");
yellowBlock.src = yellowFig;

const smWhiteCube = document.querySelector(".hero__bg-cube-sm");
smWhiteCube.src = whiteCube;

const lgWhiteCube = document.querySelector(".hero__bg-cube-lg");
lgWhiteCube.src = whiteCubeLg;

// What I Do figures

const whatIDoCube = document.querySelector(".what-i-do__pink-cube");
whatIDoCube.src = pinkFig;

const whatIDoCubeWhite = document.querySelector(".what-i-do__white-cube");
whatIDoCubeWhite.src = whiteCubeLg;

// About me section images
const leftAboutMeCube = document.querySelector(".about-me__purple-cube--left");
leftAboutMeCube.src = purpleCube;

const rightAboutMeCube = document.querySelector(
  ".about-me__purple-cube--right"
);
rightAboutMeCube.src = purpleCube;

const aboutMeOrangeBall = document.querySelector(".about-me__orange-ball");
aboutMeOrangeBall.src = orangeBall;

const aboutMePinkCube = document.querySelector(".about-me__pink-cube");
aboutMePinkCube.src = pinkFig;

const aboutMeBlueCube = document.querySelector(".about-me__blue-cube");
aboutMeBlueCube.src = blueCube;

// Work Images
const showtrackr = document.querySelector(".showTrackrImg");
showtrackr.src = showPreview;

const movieSeeker = document.querySelector(".movieSeekerImg");
movieSeeker.src = moviePreview;

const SGassociates = document.querySelector(".SGAssociatesImg");
SGassociates.src = SGPreview;

const fit4less = document.querySelector(".fit4lessImg");
fit4less.src = fitPreview;

// footer images

const bgFooter = document.querySelector(".footer");
bgFooter.style.backgroundImage = `url("${footerBG}")`;
