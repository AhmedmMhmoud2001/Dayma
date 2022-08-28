$(document).ready(function () {
  "use strict";

  // scroll to another_section
  $(".banner  a.big").click(function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $(".what_we_do").offset().top - ($('header').height() / 3.7),
      },
      100
    );
  });

  $(".banner a.small").click(function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $(".what_we_do2").offset().top - ($('header').height()),
      },
      100
    );
  });

  // Scroll window
  $(window).scroll(function () {
    if ($(window).scrollTop() > 1) {
      $("header").addClass("scrolled");
    } else {
      $("header").removeClass("scrolled");
    }
  });

  // switch active class in navbar
  $("nav ul li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  $(".navbar-toggler").click(function () {
    $("header .overlay").toggleClass("overlay-block");
  });

  // main padding
//   $(".banner").css("paddingTop", $("nav").height() / 2);
//   $(".banner").height($(window).height() - $("nav").height() / 2);

  $(".arrows .button").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  function iconTop() {
    $(".icon_tween").animate(
      {
        opacity: 0,
        marginTop: "15px",
      },
      1e3,
      function () {
        $(".icon_tween").css({
          marginTop: 0,
          opacity: 1,
        }),
          iconTop();
      }
    );
  }

  var swiper = new Swiper(".products .swiper-container", {
    slidesPerView: 4,
    spaceBetween: 15,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      580: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
    },
  });

  var swiper = new Swiper(".all-products .swiper-container", {
    slidesPerView: 4,
    spaceBetween: 15,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      580: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".accentuate_flavors .swiper-container", {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
      delay: 5000,
    },
    slidesPerGroup: 1,
    loop: true,
    // loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-prev",
      prevEl: ".swiper-button-next",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  });

  //   var menu = ["1", "2", "3", "4", "5"];
  var bannerSwiper = new Swiper(".banner_swiper", {
    direction: "vertical",
    autoplay: {
      delay: 5000,
    },
    speed: 1000,
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $(document).click(function () {
    $(".inquiry-popup").fadeOut();
  });

  $(".inquiry-popup .close-popup").click(function () {
    $(".inquiry-popup").fadeOut();
  });

  $(".inquiry-popup .popup-area").click(function (e) {
    e.stopPropagation();
  });

  $(".products-page .inquiry-link").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(".inquiry-popup").fadeIn().css("display", "flex");
  });
});

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 26.820553, lng: 30.802498 },
    zoom: 10,
  });

  var locations = [
    ["Maadi", 29.96612977973683, 31.268517755498785],
  ];

  var marker1 = new google.maps.Marker({
    position: new google.maps.LatLng(locations[0][1], locations[0][2]),
    animation: google.maps.Animation.BOUNCE,
    // icon: "img/findDealerPage/pin.png",
    map: map,
  });

  map.setCenter(marker1.getPosition());
}

