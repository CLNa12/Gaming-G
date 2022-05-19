$(".featured__slider").slick({
  dots: true,
  arrows: false,
  autoplay: 3000,
  fade: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzbGljazEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChcIi5mZWF0dXJlZF9fc2xpZGVyXCIpLnNsaWNrKHtcclxuICBkb3RzOiB0cnVlLFxyXG4gIGFycm93czogZmFsc2UsXHJcbiAgYXV0b3BsYXk6IDMwMDAsXHJcbiAgZmFkZTogdHJ1ZSxcclxuICByZXNwb25zaXZlOiBbXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiA2MDAsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAvLyBZb3UgY2FuIHVuc2xpY2sgYXQgYSBnaXZlbiBicmVha3BvaW50IG5vdyBieSBhZGRpbmc6XHJcbiAgICAvLyBzZXR0aW5nczogXCJ1bnNsaWNrXCJcclxuICAgIC8vIGluc3RlYWQgb2YgYSBzZXR0aW5ncyBvYmplY3RcclxuICBdLFxyXG59KTtcclxuIl0sImZpbGUiOiJzbGljazEuanMifQ==
