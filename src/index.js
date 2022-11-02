import "./styles/main.scss";
import mobileBGImg from "./img/bg-mobile.png";
import menuImg from "./img/bg-menu.png";
import heroBG from "./img/blue-bg.svg";
import heroBGFigs from "./img/hero-bg-shapes.png";
import orangeBall from "./img/bg-figure-orange-ball.png";
import designoPreview from "./img/designo-preview.png";
import audiophilePreview from "./img/audiophile-preview.png";
import pinkFig from "./img/bg-figure-pink.png";
import ltPinkCube from "./img/lt-pink-cube.png";
import ltPinkCubeHalf from "./img/lt-pink-cube-half.png";
import purpleBall from "./img/bg-figure-purple-ball.png";
import whiteCube from "./img/white-cube.png";
import whiteCubeLg from "./img/white-cube-lg.png";
import purpleCube from "./img/purple-cube.png";
import blueCube from "./img/blue-cube.png";
import contactBG from "./img/contact-bg.png";
import footerBG from "./img/bg-footer.png";

// menu background

const mobileBG = document.querySelector(".mobile-nav");
mobileBG.style.backgroundImage = `url("${mobileBGImg}")`;

const menuBG = document.querySelector(".main-menu__bg");
menuBG.src = menuImg;

// hero images

const heroImg = document.querySelector(".hero__img");
heroImg.src = heroBG;

const heroFigs = document.querySelector(".hero__shapes");
heroFigs.src = heroBGFigs;

const smWhiteCube = document.querySelector(".hero__bg-cube-sm");
smWhiteCube.src = whiteCube;

const lgWhiteCube = document.querySelector(".hero__bg-cube-lg");
lgWhiteCube.src = whiteCubeLg;

// What I Do figures

const whatIDoCube = document.querySelector(".what-i-do__pink-cube");
whatIDoCube.src = ltPinkCube;

const whatIDoCubeWhiteSm = document.querySelector(".what-i-do__white-cube--sm");
whatIDoCubeWhiteSm.src = whiteCube;

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

const aboutMePurpleBall = document.querySelector(".about-me__purple-ball");
aboutMePurpleBall.src = purpleBall;

const aboutMePurpleBall2 = document.querySelector(
  ".about-me__purple-ball--second"
);
aboutMePurpleBall2.src = purpleBall;

// Work Images
const workCube = document.querySelector(".work__bg-cube");
workCube.src = ltPinkCube;

const designoPreviewImg = document.querySelector(".designoImg");
designoPreviewImg.src = designoPreview;

const audiophilePreviewImg = document.querySelector(".audiophileImg");
audiophilePreviewImg.src = audiophilePreview;

// contact images
const contactBGImg = document.querySelector(".contact__bg");
contactBGImg.src = contactBG;

const contactBGImg2 = document.querySelector(".contact__bg--lower");
contactBGImg2.src = ltPinkCubeHalf;

// footer images

const bgFooter = document.querySelector(".footer");
bgFooter.style.backgroundImage = `url("${footerBG}")`;

// burger menu toggle
const openedBurgerMobile = document.querySelector(".mobile-burger");
const openedBurger = document.querySelector(".main-menu__burger");
const closedBurgerMobile = document.querySelector(
  ".header__burger-menu--mobile"
);
// const burgerLines = document.querySelectorAll(".burger__line");
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
