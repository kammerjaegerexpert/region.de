"use strict";
$(document).ready(function () {
  // sticky navbar
  window.addEventListener("scroll", function () {
    document
      .querySelector("header")
      .classList.toggle("sticky-nav", window.scrollY > 0);
  });

  //toggle navigation for small devices
  let navbar = document.querySelector(".navbar");
  let toggleMenu = document.querySelector(".menu-toggler");
  toggleMenu.addEventListener("click", function () {
    navbar.classList.toggle("show-nav");
    document.querySelector("body").classList.toggle("overflow-y-hidden");
  });

  window.onclick = function (event) {
    if (event.target == navbar) {
      navbar.classList.toggle("show-nav");
      document.querySelector("body").classList.toggle("overflow-y-hidden");
    }
  };

  // navbar custom
  $(".navbar-toggle-btn").on("click", function () {
    $(".navbar-toggle-item").slideToggle(300);
    $(this).toggleClass("open");
  });
  $(".menu-item button").on("click", function () {
    $(this).siblings("ul").slideToggle(300);
  });

  //toggle search input box
  $('.src-icon').on('click', function () {
    $('.search-box').toggleClass('show-search-box');
  });

  $(document).click(function (event) {
    if (!$(event.target).closest(".search-box, .src-icon").length) {
      $(".search-box").removeClass("show-search-box");
    }
  });


  // circle progress bar
  let progressBar = document.querySelectorAll(".circle-progress-bar");
  if (progressBar) {
    progressBar.forEach((item) => {
      let numElement = item.querySelector(".num");
      let num = parseInt(numElement.innerText);
      let count = 0;
      let time = 2000 / num;
      let circle = item.querySelector(".circle");
      let circleSize = circle.getTotalLength();
      setInterval(() => {
        if (count == num) {
          clearInterval();
        } else {
          count += 1;
          numElement.innerText = count;
        }
      }, time);
      circle.style.strokeDashoffset = circleSize - circleSize * (num / 100);
    });
  }


  let progressBar2 = document.querySelectorAll(".circle-progress-bar2");
  if (progressBar2) {
    progressBar2.forEach((item) => {
      let numElement = item.querySelector(".num");
      let num = parseInt(numElement.innerText);
      let count = 0;
      let time = 2000 / num;
      let circle = item.querySelector(".circle");
      let circleSize = circle.getTotalLength();
      setInterval(() => {
        if (count == num) {
          clearInterval();
        } else {
          count += 1;
          numElement.innerText = count;
        }
      }, time);
      circle.style.strokeDashoffset = circleSize - circleSize * (num / 100);
    });
  }

  // data picker
  if (document.querySelector("#datepicker") !== null) {
    $(function () {
      $("#datepicker").datepicker();
    });
  }

  // time picker
  if (document.querySelector("#timepicker") !== null) {
    $(function () {
      $("#timepicker").timepicker();
    });
  }

  // toggle sidebar
  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".toggle-sidebar");
  if (sidebarBtn) {
    sidebarBtn.addEventListener("click", () => {
      sidebar.classList.toggle("show-sidebar");
    });
  }

  // toggle replay box
  $(".reply").click(function () {
    $(this).next().slideToggle();
  });

  // toggle cart item
  $('.cart').on('click', function () {
    $('.cart-list').toggleClass('show-checkout-list');
  });

  $('.hide-cart').on('click', function () {
    $('.cart-list').removeClass('show-checkout-list');
  });

  $(document).click(function (event) {
    if (!$(event.target).closest(".cart-list, .cart").length) {
      $(".cart-list").removeClass("show-checkout-list");
    }
  });

  // increment decrement product items
  var minVal = 1,
    maxVal = 20;
  $(".increase-item").on("click", function () {
    var $parentElm = $(this).parents(".qtySelector");
    $(this).addClass("clicked");
    setTimeout(function () {
      $(".clicked").removeClass("clicked");
    }, 100);
    console.log("increase item");
    var value = $parentElm.find(".qtyValue").val();
    console.log(value);
    if (value < maxVal) {
      value++;
    }
    $parentElm.find(".qtyValue").val(value);
  });
  $(".decrement-item").on("click", function () {
    var $parentElm = $(this).parents(".qtySelector");
    var value = $parentElm.find(".qtyValue").val();
    if (value > 1) {
      value--;
    }
    $parentElm.find(".qtyValue").val(value);
  });

  // remove cart single item
  $(".delete-cart-item").on("click", function () {
    $(this).closest(".cart-single-item").slideUp();
  });

  // back to top
  let backToTop = $("#back-to-top");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      backToTop.addClass("show-back-to-top-btn");
    } else {
      backToTop.removeClass("show-back-to-top-btn");
    }
  });

  backToTop.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });

  //Preloader
  setTimeout(function () {
    $("#preloader").fadeToggle();
  }, 100);

  // Current Year
  $(".currentYear").text(new Date().getFullYear());
});
