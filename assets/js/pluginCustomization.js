
"use strict";
$(document).ready(function () {

  // Odometer
  $(window).on("scroll", function () {
    let windowHeight = $(window).height();
    $('.odometer').children().each(function () {
      if ($(this).isInViewport({ "tolerance": windowHeight, "toleranceForLast": windowHeight, "debug": false })) {
        var section = $(this).closest(".odometer-item");
        section.find(".odometer").each(function () {
          $(this).html($(this).attr("data-odometer-final"));
        });
      }
    });
  })

  


  // Magnific Popup video 
  if (document.querySelector(".popupvideo") !== null) {
    $(".popupvideo").magnificPopup({
      disableOn: 300,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
  }

  // Magnific Popup image 
  if (document.querySelector(".popupimage") !== null) {
    $('.popupimage').magnificPopup({
      type: 'image',
      disableOn: 400,
      mainClass: 'mfp-with-zoom',
      gallery: {
        enabled: true
      },

      zoom: {
        enabled: true,
        duration: 300,
        easing: 'ease-in-out',
        opener: function (openerElement) {
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }

    });
  }

  // recentWorkSwiper section swiper
  var recentWorkSwiper = new Swiper(".recentWorkSwiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    centeredSlides: true,
    paginationClickable: true,
    centeredSlidesBounds: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1400: {
        slidesPerView: 3.5,
        spaceBetween: 24,

      },
    },
  });

  // testimonials swiper
  var testimonialSwiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".ts-swiper-next",
      prevEl: ".ts-swiper-prev",
    },
  });

  // testimonials swiper 2
  var testimonialSwiper2 = new Swiper(".testimonialSwiper2", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".ts-swiper-pagination",
      clickable: true,
    },

  });

  // testimonials swiper 3
  var testimonialSwiper3 = new Swiper(".testimonialSwiper3", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    speed: 4000,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    breakpoints: {
      420: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      1400: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });

  // testimonials swiper 4
  var testimonialSwiper4 = new Swiper(".testimonialSwiper4", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".ts-swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".ts-swiper-next",
      prevEl: ".ts-swiper-prev",
    },
  });

  //projectSwiper
  var projectSwiper = new Swiper(".projectSwiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      420: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });

  // customized solution swiper
  var customaizedSolution = new Swiper(".customaizedSolution", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".cs-swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      575: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  //projectSwiper 2
  var projectSwiper2 = new Swiper(".pgSwiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      420: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });

  // employee quote Swiper
  var quoteThum = new Swiper(".quoteThum", {
    spaceBetween: 24,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    loop: true,
    breakpoints: {
      420: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 6,
        spaceBetween: 24,
      },
    },
  });
  var employeeQuote = new Swiper(".employeeQuote", {
    spaceBetween: 10,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },

    thumbs: {
      swiper: quoteThum,
    },
  });

  // gallery3Swiper section swiper 2
  var gallery3Swiper = new Swiper(".gallery3Swiper", {
    slidesPerView: 2,
    spaceBetween: 16,
    loop: true,
    centeredSlides: true,
    paginationClickable: true,
    centeredSlidesBounds: true,

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      576: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 4.5,
        spaceBetween: 24,
      },
      1400: {
        slidesPerView: 5.8,
        spaceBetween: 24,

      },
    },
  });

  // product banner and thumbnails
  var productThumb = new Swiper(".productThumb", {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      576: {
        spaceBetween: 24,
      },
    },
  });
  var productItem = new Swiper(".productItem", {
    loop: true,
    spaceBetween: 24,
    thumbs: {
      swiper: productThumb,
    },
  });

  // nice select 
  $('select').niceSelect();

  // wow js
  new WOW().init();

});