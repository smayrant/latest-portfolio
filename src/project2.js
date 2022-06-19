import "./styles/main.scss";
import mobileBGImg from "./img/bg-mobile.png";
import menuImg from "./img/bg-menu.png";
import contactBG from "./img/contact-bg.png";
import ltPinkCubeHalf from "./img/lt-pink-cube-half.png";
import footerBG from "./img/bg-footer.png";

// menu background

const mobileBG = document.querySelector(".mobile-nav");
mobileBG.style.backgroundImage = `url("${mobileBGImg}")`;

const menuBG = document.querySelector(".main-menu__bg");
menuBG.src = menuImg;

// contact images
const contactBGImg = document.querySelector(".contact__bg");
if (contactBGImg !== null) {
  contactBGImg.src = contactBG;
}

// footer images

const bgFooter = document.querySelector(".footer");
if (bgFooter !== null) {
  bgFooter.style.backgroundImage = `url("${footerBG}")`;
}

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
}

menuList.addEventListener("click", toggleVisibility);

mobileMenuList.addEventListener("click", toggleVisibility);

openedBurgerMobile.addEventListener("click", toggleVisibility);

openedBurger.addEventListener("click", toggleVisibility);

closedBurgerMobile.addEventListener("click", toggleVisibility);

closedBurger.addEventListener("click", toggleVisibility);
