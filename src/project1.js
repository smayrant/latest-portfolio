import "./styles/main.scss";
import mobileBGImg from "./img/bg-mobile.png";
import menuImg from "./img/bg-menu.png";
import meiro from "./img/meiro-bg.jpg";
import meiroPreview1 from "./img/meiro-preview.png";
import meiroPreview2 from "./img/meiro-preview-2.png";
import meiroPreview3 from "./img/meiro-preview-3.png";
import meiroPreview4 from "./img/meiro-preview-4.png";
import contactBG from "./img/contact-bg.png";
import ltPinkCubeHalf from "./img/lt-pink-cube-half.png";
import discoverBG from "./img/discover-bg.png";
import footerBG from "./img/bg-footer.png";

// menu background

const mobileBG = document.querySelector(".mobile-nav");
mobileBG.style.backgroundImage = `url("${mobileBGImg}")`;

const menuBG = document.querySelector(".main-menu__bg");
menuBG.src = menuImg;

// contact images
const contactBGImg = document.querySelector(".contact__bg");
contactBGImg.src = contactBG;

const contactBGImg2 = document.querySelector(".contact__bg--lower");
contactBGImg2.src = ltPinkCubeHalf;

// project image
const meiroImg = document.querySelector(".project__img--meiro");
meiroImg.style.backgroundImage = `url("${meiro}")`;

// project preview images
const meiroPreviewImg1 = document.querySelector(".preview-image--meiro1");
meiroPreviewImg1.src = meiroPreview1;

const meiroPreviewImg2 = document.querySelector(".preview-image--meiro2");
meiroPreviewImg2.src = meiroPreview2;

const meiroPreviewImg3 = document.querySelector(".preview-image--meiro3");
meiroPreviewImg3.src = meiroPreview3;

const meiroPreviewImg4 = document.querySelector(".preview-image--meiro4");
meiroPreviewImg4.src = meiroPreview4;

const projectBGFig = document.querySelector(".project__discover-img--figure");
projectBGFig.src = discoverBG;

// footer images

const bgFooter = document.querySelector(".footer");

bgFooter.style.backgroundImage = `url("${footerBG}")`;

// burger menu toggle
const openedBurgerMobile = document.querySelector(".mobile-burger");
const openedBurger = document.querySelector(".main-menu__burger");
const closedBurgerMobile = document.querySelector(
  ".header__burger-menu--mobile"
);
const closedBurger = document.querySelector(".header__burger-menu--main");
const menuList = document.querySelector(".main-menu__content");
const mobileMenuList = document.querySelector(".mobile-nav__content");
const burgerMenuContainer = document.querySelector(".burger__menu-container");

const toggleVisibility = (element, ...className) => {
  document.body.classList.toggle("no-scroll");
  className.map((className) => element.classList.toggle(className));
};

[
  openedBurgerMobile,
  openedBurger,
  closedBurgerMobile,
  closedBurger,
  menuList,
  mobileMenuList,
].forEach(function (element) {
  element.addEventListener(
    "click",
    toggleVisibility.bind(
      null,
      burgerMenuContainer,
      "hidden",
      "burger__menu--open"
    )
  );
});
