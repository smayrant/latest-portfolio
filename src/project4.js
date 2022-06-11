import "./styles/main.scss";
import github from "./img/github-logo.png";
import linkedin from "./img/linkedin.png";
import contactBG from "./img/contact-bg.png";
import ltPinkCubeHalf from "./img/lt-pink-cube-half.png";
import footerBG from "./img/bg-footer.png";

// header images
const githubIcon4 = document.querySelector(".header__icon--github");
githubIcon1.src = github;

const linkedinIcon4 = document.querySelector(".header__icon--linkedin");
linkedinIcon1.src = linkedin;

// contact images
const contactBGImg = document.querySelector(".contact__bg");
if (contactBGImg !== null) {
  contactBGImg.src = contactBG;
}

const contactBGImg2 = document.querySelector(".contact__bg--lower");
contactBGImg2.src = ltPinkCubeHalf;

// footer images

const bgFooter = document.querySelector(".footer");
if (bgFooter !== null) {
  bgFooter.style.backgroundImage = `url("${footerBG}")`;
}
