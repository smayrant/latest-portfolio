import "./styles/main.scss";
import mobileBGImg from "./img/bg-mobile.png";
import menuImg from "./img/bg-menu.png";
import crocsBg from "./img/crocs-bg.jpg";
import crocsPreview1 from "./img/crocs-preview-1.png";
import crocsPreview2 from "./img/crocs-preview-2.png";
import crocsPreview3 from "./img/crocs-preview-3.png";
import crocsPreview4 from "./img/crocs-preview-4.png";
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
const crocsImg = document.querySelector(".project__img--crocs");
crocsImg.style.backgroundImage = `url("${crocsBg}")`;

// project preview images
const crocsPreviewImg1 = document.querySelector(".preview-image--crocs1");
crocsPreviewImg1.src = crocsPreview1;

const crocsPreviewImg2 = document.querySelector(".preview-image--crocs2");
crocsPreviewImg2.src = crocsPreview2;

const crocsPreviewImg3 = document.querySelector(".preview-image--crocs3");
crocsPreviewImg3.src = crocsPreview3;

const crocsPreviewImg4 = document.querySelector(".preview-image--crocs4");
crocsPreviewImg4.src = crocsPreview4;

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
