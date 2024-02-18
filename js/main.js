// function pageWidget(pages) {
//     var widgetWrap = $('<div class="widget_wrap"><ul class="widget_list"></ul></div>');
//     widgetWrap.prependTo("body");
//     for (var i = 0; i < pages.length; i++) {
//         $('<li class="widget_item"><a class="widget_link" href="' + pages[i] + '.html' + '">' + pages[i] + '</a></li>').appendTo('.widget_list');
//     }
//     var widgetStilization = $('<style>body {position:relative} .widget_wrap{position:absolute;top:0;left:0;z-index:999999;padding:10px 20px;background:#222;border-bottom-right-radius:10px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget_wrap:after{content:" ";position:absolute;top:0;left:100%;width:24px;height:24px;background:#222 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 50% 50%;cursor:pointer}.widget_wrap:hover{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget_item{padding:0 0 10px}.widget_link{color:#fff;text-decoration:none;font-size:15px;}.widget_link:hover{text-decoration:underline} </style>');
//     widgetStilization.prependTo(".widget_wrap");
// }
//
//
// $.fn.hasAttr = function(name) {
//   return this.attr(name) !== undefined;
// };
//
// $(function() {
//     pageWidget(['index', 'donation']);
//
//     // anchor link in menu
//     $('a.js-anchor ,.js-anchor a').on('click', function (e) {
//         e.preventDefault();
//         anchor($(this));
//     });
//
//     function anchor(el) {
//         var href = el.attr('href');
//         if ($(href).length > 0 ) {
//           var scrollTo = $(href).offset().top;
//           $('body, html').animate({
//             scrollTop: scrollTo
//           }, 1000, function() {
//             el.addClass('active');
//             $('a.js-anchor ,.js-anchor a').not(el).removeClass('active');
//             $(window).scroll(function () {
//               el.removeClass('active');
//             });
//           });
//           if (window.innerWidth < 1000) {
//             $('.body').removeClass('no-scroll');
//             $('.js-mobile-menu').removeClass('open');
//           };
//         }
//         return false;
//     }
//
//
//       // Fixed Header
//       stickyHeader($('.js-header'));
//
//       function stickyHeader(el) {
//         let headerHeight = el.innerHeight();
//         $("main").css('padding-top', headerHeight);
//         $(".js-bg-position").css('background-position', "0 -" + headerHeight + "px");
//         if (window,innerWidth > 1000) {
//             $(window).scroll(function () {
//                 if ($(window).scrollTop() > headerHeight) {
//                     el.addClass('sticky');
//                 } else {
//                     el.removeClass('sticky');
//                 }
//             });
//         }
//       }
//
//       //Burger-menu
//       $('.js-toggle-menu').on('click', function () {
//         event.preventDefault();
//         $('body').toggleClass('no-scroll');
//         $('.js-mobile-menu').toggleClass('open');
//       });
//
//       //slider for Section "Main-banner"
//       mainSlider($('.js-main-banner'), $('.js-thumb'));
//
//       function mainSlider(slider, thumb) {
//         let speed = 300;
//         $(slider).slick({
//           slidesToShow: 1,
//           speed: speed,
//           arrows: false
//         });
//
//         //number of slides
//         let slide = slider.find('.slick-slide:not(.slick-cloned)'),
//             slideLeingt = slide.length;
//         $('.js-length').html(slideLeingt);
//
//         //custom arrow for slider
//         $('.js-slider-next').on('click', function() {
//           $(slider).slick('slickNext');
//         });
//         $('.js-slider-prev').on('click', function() {
//           $(slider).slick('slickPrev');
//         });
//
//         //scroll for slider
//         slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
//           let calc = ( (nextSlide) / (slick.slideCount) ) * 100;
//           thumb.css({
//             'margin-left': calc + "%",
//             'transition-duration': "0." + speed + "s"
//           });
//         });
//
//         //slide index
//         slider.on('afterChange',  function(event, slick, currentSlide, nextSlide) {
//           $('.js-index').html(currentSlide + 1);
//         });
//       }
//
//       // tabs
//       let url = document.URL,
//           hash = url.substring(url.indexOf("#")),
//           tab = $('.js-tabs').find('a'),
//           tabContent = $('.events__row');
//
//       //tab switching
//       tab.on('click', function (e) {
//         e.preventDefault();
//         var href = $(this).attr('href');
//         var target = $($(this).attr('href'));
//         $(tab).removeClass('active');
//         $(this).addClass('active');
//         $(tabContent).hide();
//         $(href).fadeIn('700');
//         $(tab).each(function () {
//           if ($(this).attr('href') === href) {
//             $(this).addClass('active');
//           }
//         });
//         window.history.replaceState("", document.title, window.location.href.replace(location.hash, "") + $(this)[0].hash);
//       });
//
//     //show tab from id in url
//
//     if (url.indexOf('#tab') != -1) {
//       tabContent.not(hash).hide();
//       tab.not(hash).removeClass('active');
//       tab.each(function (key, val) {
//         if (hash == $(val).attr("href")) {
//           $(val).click();
//         }
//       });
//     } else {
//       tab.eq(0).addClass('active');
//       tabContent.not(':eq(0)').hide();
//     }
//
//     //mobile accordion
//     $('.js-accordion').on('click', function() {
//       $(this).parent('div').find('ul').slideToggle();
//     });
//
//     // dropdown toggle
//     $('.js-dropdown-btn').on('click', function() {
//       $(this).parent('div').toggleClass('open').find('.js-dropdown').slideToggle();
//     });
// })
"use strict";

function pageWidget(pages) {
  var widgetWrap = $('<div class="widget_wrap"><ul class="widget_list"></ul></div>');
  widgetWrap.prependTo("body");

  for (var i = 0; i < pages.length; i++) {
    $('<li class="widget_item"><a class="widget_link" href="' + pages[i] + '.html' + '">' + pages[i] + '</a></li>').appendTo('.widget_list');
  }

  var widgetStilization = $('<style>body {position:relative} .widget_wrap{position:absolute;top:0;left:0;z-index:999999;padding:10px 20px;background:#222;border-bottom-right-radius:10px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget_wrap:after{content:" ";position:absolute;top:0;left:100%;width:24px;height:24px;background:#222 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 50% 50%;cursor:pointer}.widget_wrap:hover{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget_item{padding:0 0 10px}.widget_link{color:#fff;text-decoration:none;font-size:15px;}.widget_link:hover{text-decoration:underline} </style>');
  widgetStilization.prependTo(".widget_wrap");
}

$.fn.hasAttr = function (name) {
  return this.attr(name) !== undefined;
};

$(function () {
  // pageWidget(['index', 'donation', '404', '500']); // anchor link in menu
  $('a.js-anchor ,.js-anchor a').on('click', function (e) {
    // fix other pages
    if (window.location.href != window.location.origin + '/' && window.location.href != window.location.origin + '/' + location.hash) {
      return;
    } // /


    e.preventDefault();
    anchor($(this));
  });

  function anchor(el) {
    var href = el.attr('href');

    if ($(href).length > 0) {
      var scrollTo = $(href).offset().top;
      $('body, html').animate({
        scrollTop: scrollTo
      }, 1000, function () {
        el.addClass('active');
        $('a.js-anchor ,.js-anchor a').not(el).removeClass('active');
        $(window).scroll(function () {
          el.removeClass('active');
        });
      });

      if ($(window).width() < 1000) {
        $('body').removeClass('no-scroll');
        $('.js-mobile-menu').removeClass('open');
      }

      ;
    }

    return false;
  } // Fixed Header


  stickyHeader($('.js-header'));

  function stickyHeader(el) {
    var headerHeight = el.innerHeight();
    $("main").css('padding-top', headerHeight);

    if (window, innerWidth > 1000) {
      $(".js-bg-position").css({
        "height": 'calc( 100vh - ' + headerHeight + "px"
      });
    } else {
      $(".js-bg-position").css({
        // 'background-position': "0 -" + headerHeight + "px",
        "min-height": 'calc( 100vh - ' + headerHeight + "px"
      });
    }

    $(window).scroll(function () {
      if ($(window).scrollTop() > headerHeight) {
        el.addClass('sticky');
      } else {
        el.removeClass('sticky');
      }
    });
  }

  $('.js-toggle-menu').on('click', function () {
    event.preventDefault();
    $('body').toggleClass('no-scroll');
    $('.js-mobile-menu').toggleClass('open');
  }); //Burger-menu

  mainSlider($('.js-main-banner'), $('.js-thumb')); //slider for Section "Main-banner"

  function mainSlider(slider, thumb) {
    var speed = 300;
    $(slider).slick({
      slidesToShow: 1,
      speed: speed,
      arrows: false,
      infinite: false
    }); //number of slides

    var slide = slider.find('.slick-slide:not(.slick-cloned)'),
        slideLength = slide.length;
    $('.js-length').html(slideLength); //custom arrow for slider

    thumb.css('width', 'calc(100% / ' + slideLength + ')');
    slider.parent('div').find('.js-slider-next').on('click', function () {
      $(slider).slick('slickNext');
    });
    slider.parent('div').find('.js-slider-prev').on('click', function () {
      $(slider).slick('slickPrev');
    }); //scroll for slider

    $('.js-slider-prev').addClass('disabled');
    slider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
      // console.log((currentSlide + 1) + ", " + slideLength);
      // console.log(slider.html());
      if (currentSlide + 1 == slideLength) {
        slider.parent('div').find('.js-slider-next').addClass('disabled');
      } else if (currentSlide + 1 == 1) {
        slider.parent('div').find('.js-slider-prev').addClass('disabled');
      } else {
        slider.parent('div').find('.js-slider-next, .js-slider-prev').removeClass('disabled');
      }
    }); // disable arrow for slider

    slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      var calc = nextSlide / slick.slideCount * 100;
      thumb.css({
        'margin-left': calc + "%",
        'transition-duration': "0." + speed + "s"
      });
    }); //slide index

    slider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
      $('.js-index').html(currentSlide + 1);
    });
  }

  otherSlider($('.js-videos-slider'), 2, 1);
  otherSlider($('.js-donation-slider'), 4, 2);

  function otherSlider(slider, sliderItem, mobSliderItem) {
    $(slider).slick({
      slidesToShow: sliderItem,
      arrows: false,
      infinite: false,
      responsive: [{
        breakpoint: 1000,
        settings: {
          slidesToShow: mobSliderItem
        }
      }]
    }); //number of slides

    var slide = slider.find('.slick-slide:not(.slick-cloned)'),
        slideLength = slide.length,
        lastSlide = slider.find('.slick-slide:not(.slick-cloned):last-child'); // console.log(slide);

    slider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
      // console.log(slider.html());
      // console.log('Последний слайд: ' + slideLength + ', текущий слайд: ' + (currentSlide + sliderItem))
      if (lastSlide.hasClass('slick-active')) {
        slider.parent('div').find('.js-slider-next').addClass('disabled');
        slider.parent('div').find('.js-slider-prev').removeClass('disabled');
      } else if (currentSlide + 1 == 1) {
        slider.parent('div').find('.js-slider-prev').addClass('disabled');
        slider.parent('div').find('.js-slider-next').removeClass('disabled');
      } else {
        slider.parent('div').find('.js-slider-next, .js-slider-prev').removeClass('disabled');
      }
    }); // disable arrow for slider

    slider.parent('div').find('.js-slider-next').on('click', function () {
      $(slider).slick('slickNext');
      $(this).siblings('.js-slider-prev').removeClass('disabled');
    });
    slider.parent('div').find('.js-slider-prev').on('click', function () {
      $(slider).slick('slickPrev');
      $(this).siblings('.js-slider-next').removeClass('disabled');
    }); //scroll for slider
  }

  var url = document.URL,
      hash = url.substring(url.indexOf("#")),
      tab = $('.js-tabs').find('a'),
      tabContent = $('.events__row'); //tab switching

  tab.on('click', function (e) {
    e.preventDefault();
    var href = $(this).attr('href');
    var target = $($(this).attr('href'));
    $(tab).removeClass('active');
    $(this).addClass('active');
    $(tabContent).hide();
    $(href).fadeIn('700');
    $(tab).each(function () {
      if ($(this).attr('href') === href) {
        $(this).addClass('active');
      }
    });
    window.history.replaceState("", document.title, window.location.href.replace(location.hash, "") + $(this)[0].hash);
  });

  if (window, innerWidth < 767) {
    $('.js-accordion').on('click', function () {
      $(this).parent('div').find('ul').slideToggle();
    }); //mobile accordion
  }

  $('.js-dropdown-btn').on('click', function () {
    $(this).parent('div').toggleClass('open').find('.js-dropdown').slideToggle();
    $('.js-overlay').fadeToggle();
    $('.js-header').toggleClass('over-overlay-bg'); // $('body').toggleClass('no-scroll');
  }); // dropdown toggle

  $('.js-overlay').on('click', function () {
    // $('body').removeClass('no-scroll');
    $(this).fadeOut();
    $('.js-dropdown-btn').parent('div').removeClass('open').find('.js-dropdown').slideUp();
    $('.js-header').removeClass('over-overlay-bg');
  });
  $('.js-play-video').on('click', function () {
    // $(this).siblings('.js-video')[0].paused ? $(this).siblings('.js-video')[0].play() : $(this).siblings('.js-video')[0].pause()
    $(this).siblings('.js-video')[0].play();
    $(this).addClass('is-hide');
  });
  $('.js-video').on('click', function () {
    $(this)[0].pause();
    $(this).siblings('.js-play-video').removeClass('is-hide');
  }); // video

  $(window).on("load", function () {
    $('body').addClass('body-load');
    $(".js-scroll").mCustomScrollbar({
      theme: "dark"
    });
  }); // custom Scroll

  $(window).on('load', function () {
    $('section').each(function () {
      startAnimation(this);
    });
    $('.js-gif').each(function () {
      startGif($(this));
    });
    $(document).scroll(function () {
      $('section').each(function () {
        startAnimation(this);
      });
      $('.js-gif').each(function () {
        startGif($(this));
      });
    });
  });

  function startGif(gif) {
    var gifSrc = gif.attr('src'),
        animationDuration = 1500;

    if (window.innerWidth > 1000) {
      if (gifSrc.indexOf('.svg') > -1 && gif.closest('.js-section').hasClass('anim__init') && $('body').hasClass('body-anim')) {
        gif.attr('src', gifSrc.replace(".svg", ".gif"));
        setTimeout(function () {
          gif.addClass('visible');
        }, animationDuration); // lockAnimation = true;\
      }
    }
  } //start animation for gif


  function startAnimation(section, callback) {
    var position = $(section).offset().top,
        footerPosition = $('footer').offset().top,
        footerHeight = $('footer').innerHeight(),
        height = $(section).innerHeight(),
        scroll = $(document).scrollTop();

    if (scroll > position - window.innerHeight && scroll < position + height) {
      $(section).addClass('anim__init');
    } else if (scroll > footerPosition - footerHeight / 2 * 3) {
      $('footer').addClass('anim__init');
    }
  } //start animation (scroll to tag "section")


  $('.js-video-hover').mouseover(function () {
    $(this).get(0).pause();
  });
  $('.js-video-hover').mouseout(function () {
    $(this).get(0).play();
  });
  $('.js-ui-progressbar').each(function () {
    var max = $(this).parent('div').find('.js-max').text(),
        middle = $(this).parent('div').find('.js-value').text();
    $(this).progressbar({
      max: parseInt(max),
      value: parseInt(middle)
    });
  });
});