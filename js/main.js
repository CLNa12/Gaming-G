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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNoZWNrU2Nyb2xsIH0gZnJvbSBcIi4vbW9kdWxlcy9jaGVja1Njcm9sbC5qc1wiO1xyXG5pbXBvcnQgeyBjbGlja0J1cmdlciB9IGZyb20gXCIuL21vZHVsZXMvY2xpY2tCdXJnZXIuanNcIjtcclxuaW1wb3J0IHsgZ2V0SGVhZGVyQVBvc2l0aW9uIH0gZnJvbSBcIi4vbW9kdWxlcy9nZXRIZWFkZXJBUG9zaXRpb24uanNcIjtcclxuaW1wb3J0IHsgc2Nyb2xsT25DbGljayB9IGZyb20gXCIuL21vZHVsZXMvc2Nyb2xsT25DbGljay5qc1wiO1xyXG5cclxuc2Nyb2xsT25DbGljaygpO1xyXG5jbGlja0J1cmdlcigpO1xyXG5nZXRIZWFkZXJBUG9zaXRpb24oKTtcclxuZ2V0SGVhZGVyQVBvc2l0aW9uKCk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgY2hlY2tTY3JvbGwoZ2V0SGVhZGVyQVBvc2l0aW9uKCkpO1xyXG59KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICBjaGVja1Njcm9sbChnZXRIZWFkZXJBUG9zaXRpb24oKSk7XHJcbn0pO1xyXG4iXSwiZmlsZSI6Im1haW4uanMifQ==
