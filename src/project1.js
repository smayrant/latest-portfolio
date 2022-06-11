import "./styles/main.scss";
import github from "./img/github-logo.png";
import linkedin from "./img/linkedin.png";
import contactBG from "./img/contact-bg.png";
import ltPinkCubeHalf from "./img/lt-pink-cube-half.png";
import discoverBG from "./img/discover-bg.png";
import footerBG from "./img/bg-footer.png";
import showPreview from "./img/showtrackr.jpg";

// header images
const githubIcon1 = document.querySelector(".header__icon--github");
githubIcon1.src = github;

const linkedinIcon1 = document.querySelector(".header__icon--linkedin");
linkedinIcon1.src = linkedin;

// contact images
const contactBGImg = document.querySelector(".contact__bg");
contactBGImg.src = contactBG;

const contactBGImg2 = document.querySelector(".contact__bg--lower");
contactBGImg2.src = ltPinkCubeHalf;

// project image
const project1Img = document.querySelector(".project__img--first");
project1Img.style.backgroundImage = "url(./img/showtrackr.jpg)";

const project1BGImg = document.querySelector(".project__discover-img");
project1BGImg.style.backgroundImage = "url(./img/showtrackr.jpg)";

const project1BGFig = document.querySelector(".project__discover-img--figure");
project1BGFig.src = discoverBG;

// footer images

const bgFooter = document.querySelector(".footer");

bgFooter.style.backgroundImage = `url("${footerBG}")`;
