import "./styles/main.scss";
import mobileBGImg from "./img/bg-mobile.png";
import menuImg from "./img/bg-menu.png";
import recRoomBg from "./img/recRoom-bg.jpg";
import recRoomPreview1 from "./img/recRoom-preview-1.png";
import recRoomPreview2 from "./img/recRoom-preview-2.png";
import recRoomPreview3 from "./img/recRoom-preview-3.png";
import recRoomPreview4 from "./img/recRoom-preview-4.png";
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
const recRoomImg = document.querySelector(".project__img--recRoom");
recRoomImg.style.backgroundImage = `url("${recRoomBg}")`;

// project preview images
const recRoomPreviewImg1 = document.querySelector(".preview-image--recRoom1");
recRoomPreviewImg1.src = recRoomPreview1;

const recRoomPreviewImg2 = document.querySelector(".preview-image--recRoom2");
recRoomPreviewImg2.src = recRoomPreview2;

const recRoomPreviewImg3 = document.querySelector(".preview-image--recRoom3");
recRoomPreviewImg3.src = recRoomPreview3;

const recRoomPreviewImg4 = document.querySelector(".preview-image--recRoom4");
recRoomPreviewImg4.src = recRoomPreview4;

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
