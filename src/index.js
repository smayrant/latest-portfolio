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
import heroCube from "./img/hero-cube.png";
import heroCubeLg from "./img/hero-cube-lg.png";

// header images
const logoImg = document.querySelector(".header__logo");
logoImg.src = logo;

// hero images
const scrollImg = document.querySelector(".scroll__img");
scrollImg.src = scrollIcon;

const heroBG = document.querySelector(".hero__bg-img");
heroBG.src = blueBG;

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

const smHeroCube = document.querySelector(".hero__bg-cube-sm");
smHeroCube.src = heroCube;

const lgHeroCube = document.querySelector(".hero__bg-cube-lg");
lgHeroCube.src = heroCubeLg;
