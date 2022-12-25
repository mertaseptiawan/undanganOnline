  //navbar
// $(window).scroll(function () {
//   var $heightScrolled = $(window).scrollTop();
//   var $height = screen.height;

//   if ($heightScrolled < $height) {
//     $('.navbar').addClass("bg-white")
//   } else {
//     $('.navbar').removeClass("bg-white")
//   }
// })

$(window).scroll(function () {
  var $heightScrolled = $(window).scrollTop();
  var $defaultHeight = screen.height;

  if ($heightScrolled < $defaultHeight) {
      $('.navbar').removeClass("bg-pink-100")
      $('.navbar-ul').removeClass("text-black/70")
      $('.navbar-ul').addClass("text-white")
  }
  else {
      $('.navbar').addClass("bg-pink-100"),
      $('.navbar-ul').removeClass("text-white"),
      $('.navbar-ul').addClass("text-black/70")
  }

});



  //swiper
const swiper = new Swiper('.swiper', {
  spaceBetween: 30,
        centeredSlide: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});