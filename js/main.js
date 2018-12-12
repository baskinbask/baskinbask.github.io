$(document).ready(function() {
  //Fixed menu on scroll
  // $(window).on("scroll", function() {
  //   var w_top = $(window).scrollTop();

  //   if (w_top > 250) {
  //     $(".main__menu_sticky").addClass("is-active");
  //   } else {
  //     $(".main__menu_sticky").removeClass("is-active");
  //   }
  // });

  // SMOOTH SCROLL
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .not('[href^="#pill"]')
    .not('[href^="#filter"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  // //MAIN MENU
  $(".hamburger").click(function() {
    $(".hamburger").toggleClass("is-active");
    $(".main__categories_list--mobile").toggleClass("is-active");
  });

  // SLICK
  // Header slider
  $(".main__slider").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    arrows: false
  });

  //SPECIALS SLIDER - LEFT
  $(".special__slider-left").slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1
  });

  //SPECIALS SLIDER - RIGHT
  $(".special__slider-right").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1
  });

  //BEST SLIDER
  $(".best__slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });

  //BRANDS SLIDER
  $(".brands__slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 3
        }
      }
    ]
  });

  //REWIEWS SLIDER
  $(".rewiews__slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  //SINGLE-PRODUCT SLIDER
  $(".single-product__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    cssEase: "linear",
    asNavFor: ".single-product__slider-nav"
  });

  $(".single-product__slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".single-product__slider",
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          slidesToShow: 3,
          centerPadding: "10px"
        }
      }
    ]
  });

  //active item in menu
  $(".best__categories_btn").click(function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });

  //BASKET & LOVEIT POPUPS
  $(".main__menu_item-basket a").click(function() {
    $(".basket__popup_list").toggleClass("is-active");
  });

  $(".main__menu_item-loveit a").click(function() {
    $(".loveit__popup_list").toggleClass("is-active");
  });

  $(".basket__popup_icon").click(function() {
    $(this)
      .parent(".basket__popup_item")
      .hide();
  });

  //BASKET-PAGE CANCEL BTN
  $(".basket-page__cancel-btn").click(function() {
    $(this)
      .parent()
      .parent(".basket-page__product_row")
      .hide();
  });

  //REMODAL - add custom animation
  $(document).on("opening", ".remodal", function() {
    $(this).addClass("bounceIn");
    // $(".remodal-is-opening").addClass("slideInDown");
  });
  // $(document).on("closing", ".remodal", function() {
  //   $(this).addClass("bounceOut");
  // });

  //****NoUiSLIDER */
  var sslider = document.getElementById("slider-ui");
  noUiSlider.create(sslider, {
    start: [1000, 6000],
    behaviour: "drag-tap",
    tooltips: true,
    connect: true,
    format: wNumb({
      decimals: 0,
      suffix: " ₽"
    }),
    range: {
      min: 0,
      max: 10000
    }
  });

  //****COLLAPSE BTN******
  // var btns = $(".filter__category_collapse-btn");
  // for (btn of btns) {
  //   btn.classList.contains("collapsed")
  //     ? (btn.innerText = "+")
  //     : (btn.innerText = "-");
  // }

  // $(".main__slider").on("beforeChange", function(event, slick, currentSlide) {
  //   $(slick.$slides.eq(currentSlide))
  //     .find(".main__slider_item")
  //     .removeClass("is-active");
  // });

  // $(".main__slider").on("afterChange", function(event, slick, currentSlide) {
  //   $(slick.$slides.eq(currentSlide))
  //     .find(".main__slider_item")
  //     .addClass("is-active");
  // });

  // // Gsllery lightbox
  // $(".gallery__slider").slickLightbox({
  //   src: "src",
  //   itemSelector: ".gallery__slider_item img"
  // });

  // // CHIEF SECTION TOGGLE TEXT
  // $.fn.extend({
  //   toggleText: function(a, b){
  //     return this.text(this.text() == b ? a : b);
  //   }
  // });
  // $('.chief__main_link').click(function(e) {
  //   e.preventDefault();
  //   $(this).toggleText('читать далее', 'скрыть');
  //   $('.chief__main_bio .hid').toggle(800);
  // });
});
