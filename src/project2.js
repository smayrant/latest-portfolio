import "./styles/main.scss";
import mobileBGImg from "./img/bg-mobile.png";
import menuImg from "./img/bg-menu.png";
import audiophile from "./img/audiophile.png";
import audiophilePreview1 from "./img/audiophile-preview-1.png";
import audiophilePreview2 from "./img/audiophile-preview-2.png";
import audiophilePreview3 from "./img/audiophile-preview-3.png";
import audiophilePreview4 from "./img/audiophile-preview-4.png";
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
const audiophileImg = document.querySelector(".project__img--audiophile");
audiophileImg.style.backgroundImage = `url("${audiophile}")`;

// project preview images
const audiophilePreviewImg1 = document.querySelector(
  ".preview-image--audiophile1"
);
audiophilePreviewImg1.src = audiophilePreview1;

const audiophilePreviewImg2 = document.querySelector(
  ".preview-image--audiophile2"
);
audiophilePreviewImg2.src = audiophilePreview2;

const audiophilePreviewImg3 = document.querySelector(
  ".preview-image--audiophile3"
);
audiophilePreviewImg3.src = audiophilePreview3;

const audiophilePreviewImg4 = document.querySelector(
  ".preview-image--audiophile4"
);
audiophilePreviewImg4.src = audiophilePreview4;

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
