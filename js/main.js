import { checkScroll } from "./modules/checkScroll.js";
import { clickBurger } from "./modules/clickBurger.js";
import { getHeaderAPosition } from "./modules/getHeaderAPosition.js";
import { scrollOnClick } from "./modules/scrollOnClick.js";

scrollOnClick();
clickBurger();
getHeaderAPosition();
getHeaderAPosition();

document.addEventListener("DOMContentLoaded", () => {
  checkScroll(getHeaderAPosition());
});

window.addEventListener("scroll", () => {
  checkScroll(getHeaderAPosition());
});
