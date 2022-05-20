import { checkScroll } from "./modules/checkScroll.js";
import { clickBurger } from "./modules/clickBurger.js";
import { getHeaderAPosition } from "./modules/getHeaderAPosition.js";
import { scrollOnClick } from "./modules/scrollOnClick.js";

scrollOnClick();
clickBurger();
getHeaderAPosition();

document.addEventListener("DOMContentLoaded", () => {
  checkScroll(getHeaderAPosition(checkWindowSize));
});

window.addEventListener("scroll", () => {
  checkScroll(getHeaderAPosition());
});

// if (window.matchMedia("(max-width: 772px)").matches) {
//   $(".footer__title").click(function (event) {
//     if ($(".footer__col").hasClass("one")) {
//       $(".footer__title").not($(this)).removeClass("active");
//       $(".footer__list, .footer__info").not($(this).next()).slideUp(300);
//     }
//     $(this).toggleClass("active").next().slideToggle(300);
//   });
// }

// const checkWindowSize = () => {
//   if (window.matchMedia("(max-width: 772px)").matches) {
//     spoilers();
//   }
// };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNoZWNrU2Nyb2xsIH0gZnJvbSBcIi4vbW9kdWxlcy9jaGVja1Njcm9sbC5qc1wiO1xyXG5pbXBvcnQgeyBjbGlja0J1cmdlciB9IGZyb20gXCIuL21vZHVsZXMvY2xpY2tCdXJnZXIuanNcIjtcclxuaW1wb3J0IHsgZ2V0SGVhZGVyQVBvc2l0aW9uIH0gZnJvbSBcIi4vbW9kdWxlcy9nZXRIZWFkZXJBUG9zaXRpb24uanNcIjtcclxuaW1wb3J0IHsgc2Nyb2xsT25DbGljayB9IGZyb20gXCIuL21vZHVsZXMvc2Nyb2xsT25DbGljay5qc1wiO1xyXG5cclxuc2Nyb2xsT25DbGljaygpO1xyXG5jbGlja0J1cmdlcigpO1xyXG5nZXRIZWFkZXJBUG9zaXRpb24oKTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICBjaGVja1Njcm9sbChnZXRIZWFkZXJBUG9zaXRpb24oY2hlY2tXaW5kb3dTaXplKSk7XHJcbn0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gIGNoZWNrU2Nyb2xsKGdldEhlYWRlckFQb3NpdGlvbigpKTtcclxufSk7XHJcblxyXG4vLyBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA3NzJweClcIikubWF0Y2hlcykge1xyXG4vLyAgICQoXCIuZm9vdGVyX190aXRsZVwiKS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcclxuLy8gICAgIGlmICgkKFwiLmZvb3Rlcl9fY29sXCIpLmhhc0NsYXNzKFwib25lXCIpKSB7XHJcbi8vICAgICAgICQoXCIuZm9vdGVyX190aXRsZVwiKS5ub3QoJCh0aGlzKSkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbi8vICAgICAgICQoXCIuZm9vdGVyX19saXN0LCAuZm9vdGVyX19pbmZvXCIpLm5vdCgkKHRoaXMpLm5leHQoKSkuc2xpZGVVcCgzMDApO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKS5uZXh0KCkuc2xpZGVUb2dnbGUoMzAwKTtcclxuLy8gICB9KTtcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgY2hlY2tXaW5kb3dTaXplID0gKCkgPT4ge1xyXG4vLyAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDc3MnB4KVwiKS5tYXRjaGVzKSB7XHJcbi8vICAgICBzcG9pbGVycygpO1xyXG4vLyAgIH1cclxuLy8gfTsiXSwiZmlsZSI6Im1haW4uanMifQ==