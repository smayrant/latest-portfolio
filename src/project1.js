import "./styles/main.scss";
import mobileBGImg from "./img/bg-mobile.png";
import menuImg from "./img/bg-menu.png";
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
const project1Img = document.querySelector(".project__img--first");
project1Img.style.backgroundImage = "url(./img/showtrackr.jpg)";

const project1BGImg = document.querySelector(".project__discover-img");
project1BGImg.style.backgroundImage = "url(./img/showtrackr.jpg)";

const project1BGFig = document.querySelector(".project__discover-img--figure");
project1BGFig.src = discoverBG;

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

function toggleVisibility() {
  burgerMenuContainer.classList.toggle("hidden");
  burgerMenuContainer.classList.toggle("burger__menu--open");
}

menuList.addEventListener("click", toggleVisibility);

mobileMenuList.addEventListener("click", toggleVisibility);

openedBurgerMobile.addEventListener("click", toggleVisibility);

openedBurger.addEventListener("click", toggleVisibility);

closedBurgerMobile.addEventListener("click", toggleVisibility);

closedBurger.addEventListener("click", toggleVisibility);