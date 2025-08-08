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
	
if(jQuery(window).width() < 1280) {
jQuery('.menu-item-has-children').addClass('mbl-dropdown');
jQuery('.menu-item-has-children>a').append('<span class="dropdown-container"><img src="https://fieldlogix.com/wp-content/uploads/2024/03/mbl-dropdown-header.svg"></span>');
}

jQuery('.dropdown-container').click(function () {
var subMenu = jQuery(this).parent().siblings('.sub-menu');

// Toggle 'active' class on the clicked dropdown-container
jQuery(this).toggleClass('active');

// Remove 'active' class from other dropdown-container elements
jQuery('.dropdown-container').not(this).removeClass('active');

// Check if sub-menu is visible
if (subMenu.is(':visible')) {
// If visible, slide up
subMenu.slideUp();
} else {
// If not visible, slide up all sub-menus and then slide down this one
jQuery('.sub-menu').slideUp();
subMenu.slideDown();
}
});


document.querySelector('.search-toggle').addEventListener('click', function() {
  document.documentElement.classList.toggle('search-active');
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

const header = document.querySelector(".header-site");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 150) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});


var swiper = new Swiper(".slider-serving", {
  direction: 'horizontal',
    slidesPerView: 6,
    spaceBetween: 21,
    loop: true,
    autoplay: {
      delay: 3000,
         disableOnInteraction: false 
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 14,
      },
      1024: {
        slidesPerView: 5,
      }
    }
  });








