// $(window).scroll(function () {
//   var $heightScrolled = $(window).scrollTop();
//   var $defaultHeight = screen.height;

//   if ($heightScrolled < $defaultHeight) {
//       $('.navbar').removeClass("bg-pink-100")
//       $('.navbar-ul').removeClass("text-black/70")
//       $('.navbar-ul').addClass("text-white")
//   }
//   else {
//       $('.navbar').addClass("bg-pink-100"),
//       $('.navbar-ul').removeClass("text-white"),
//       $('.navbar-ul').addClass("text-black/70")
//   }

// });


  //countdown
const countdown = new Date("September 13, 2023 17:00:00").getTime();

const x = setInterval(function() {
  const now = new Date().getTime();

  const distance = countdown - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("seccond").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("day").innerHTML = "00"
  }
},1000);

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