import "./styles/main.scss";
import mobileBGImg from "./img/bg-mobile.png";
import menuImg from "./img/bg-menu.png";
import freshness2go from "./img/freshness2go-bg.png";
import freshness2goPreview1 from "./img/freshness2go-preview-1.png";
import freshness2goPreview2 from "./img/freshness2go-preview-2.png";
import freshness2goPreview3 from "./img/freshness2go-preview-3.png";
import freshness2goPreview4 from "./img/freshness2go-preview-4.png";
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
const freshness2goImg = document.querySelector(".project__img--freshness2go");
freshness2goImg.style.backgroundImage = `url("${freshness2go}")`;

// project preview images
const freshness2goPreviewImg1 = document.querySelector(
  ".preview-image--freshness2go1"
);
freshness2goPreviewImg1.src = freshness2goPreview1;

const freshness2goPreviewImg2 = document.querySelector(
  ".preview-image--freshness2go2"
);
freshness2goPreviewImg2.src = freshness2goPreview2;

const freshness2goPreviewImg3 = document.querySelector(
  ".preview-image--freshness2go3"
);
freshness2goPreviewImg3.src = freshness2goPreview3;

const freshness2goPreviewImg4 = document.querySelector(
  ".preview-image--freshness2go4"
);
freshness2goPreviewImg4.src = freshness2goPreview4;

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
