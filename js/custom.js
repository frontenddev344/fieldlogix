window.addEventListener('DOMContentLoaded', function() {
    $(document).ready(function () {
  $("a:containsIgnoreCase('See how we transform fleets')")
    .css("background-color", "#FF7300")
    .hover(
      function () {
        $(this).css({
          "background-color": "transparent",
          border: "1px solid #FF7300",
          color: "#FF7300",
        });
      },
      function () {
        $(this).css({
          "background-color": "#FF7300",
          border: "none",
          color: "#fff",
        });
      }
    );
});

$.expr[":"].containsIgnoreCase = function (n, i, m) {
  return jQuery(n).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
};
        
        $(document).ready(function () {
  $(".box-area").first().show();

  $(".device-tabbing p").click(function () {
    $(".device-tabbing p").removeClass("active-track");

    $(this).addClass("active-track");

    $(".box-area").hide();

    $(".box-area").eq($(this).index()).show();
  });
});
        
        

        
        $(document).ready(function () {
  $(".dropdown-menu").hide();

  function toggleMenu($menu) {
    $(".dropdown-menu").not($menu).hide(); 
    $menu.toggle();
  }

  $(".mbl-dropdown > a img").click(function (e) {
    e.preventDefault();
    var $menu = $(this).parent().siblings(".dropdown-menu");
    toggleMenu($menu);
  });

  $(".dropdown-parent").hover(function() {
    if ($(window).width() > 1279) {
      var $menu = $(this).find('.dropdown-menu');
      toggleMenu($menu);
    }
  }, function() {
    if ($(window).width() > 1279) {
      var $menu = $(this).find('.dropdown-menu');
      $menu.hide();
    }
  });

  $(document).on("click", function (event) {
    if (
      !$(event.target).closest(".dropdown-menu").length &&
      !$(event.target).closest(".mbl-dropdown > a img").length
    ) {
      $(".dropdown-menu").hide(); 
    }
  });

  if ($(window).width() > 1279) {
    $(".dropdown-menu").show();
  }

  $(window).resize(function () {
    if ($(window).width() > 1279) {
      $(".dropdown-menu").show(); 
    } else {
      $(".dropdown-menu").hide(); 
    }
  });
});
        
        
        $(document).ready(function() {
    $('.navbtn,.start-btn,.tour-btn,.see,.page-id-607 .fleet-para>a').click(function() {
 
        var headerHeight = $('#header').innerHeight();
        var lovePosition = $('#dash-tour').offset().top - headerHeight - 40;

        // Animate scrolling to the #love div
        $('html, body').animate({
            scrollTop: lovePosition
        }, 'slow');
    });
});


$.extend($.expr[':'], {
    'containsInsensitive': function(elem, i, match, array) {
        return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || '').toLowerCase()) >= 0;
    }
});
$('a:containsInsensitive("see how we transform fleets")').removeAttr('target');
$('.banner-buttons a, .head-button a, .plan-head a, .banner-buttons-sol a').removeAttr('target');


        jQuery(document).ready(function () {
  jQuery(".hamburger button").click(function () {
    jQuery(this).toggleClass("active");
    jQuery("#navbar").toggleClass("active");
    if (jQuery(this).hasClass("active")) {
      jQuery("html").addClass("overflow");
    } else {
      jQuery("html").removeClass("overflow");
    }
  });
});



    });



    // type js plugin
let typeJsText = document.querySelector(".typeJsText");
let textArray = typeJsText.dataset.typetext.split("");
let counter = -1;

typeJsText.innerHTML = "";

function typeJs() {
  if (counter < typeJsText.dataset.typetext.length) {
    counter++;
    typeJsText.innerHTML += typeJsText.dataset.typetext.charAt(counter);
    textArray = typeJsText.dataset.typetext.split("");
  } else {
    textArray.pop();
    typeJsText.innerHTML = textArray.join("");
    if (textArray.length == 0) {
      counter = -1;
    }
  }
}

setInterval(() => {
  typeJs();
}, 100);





var swiper = new Swiper(".slider-serving", {
  direction: 'horizontal',
  slidesPerView: 6,
  spaceBetween: 21,
  loop: true,
  autoplay: {
      delay: 3000, 
     disableOnInteraction: false 
    },
  scrollbar: {
     el: ".swiper-scrollbar",
     hide: false,
     draggable: true,
  },
  breakpoints: {
     // when window width is >= 320px
     320: {
      slidesPerView: 3,
     },
     // when window width is >= 480px
     480: {
        slidesPerView: 3,
        spaceBetween: 10,
     },
     // when window width is >= 768px
     768: {
      slidesPerView: 4,
        spaceBetween: 14,
     },
     // when window width is >= 1024px
     1024: {
        slidesPerView: 5,
     }
  }
});









