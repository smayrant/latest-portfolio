import "./styles/main.scss";
import contactBG from "./img/contact-bg.png";
import footerBG from "./img/bg-footer.png";

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
