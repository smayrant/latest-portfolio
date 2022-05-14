import "./styles/main.scss";
import logo from "./img/logo.svg";
import scrollIcon from "./img/scroll-icon.svg";
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
import btnArrow from "./img/arrow-right.svg";

// header images
const logoImg = document.querySelector(".header__logo");
logoImg.src = logo;

// hero images
const scrollImg = document.querySelector(".scroll__img");
scrollImg.src = scrollIcon;

const heroBG = document.querySelector(".hero");
heroBG.style.backgroundImage = "url('./img/blue-bg.svg')";

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

// Right Arrow Icon for Buttons
const rtArrow = document.querySelector(".btn-arrow");
rtArrow.src = btnArrow;
