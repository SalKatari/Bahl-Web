// // fullpage.js
//
// new fullpage('#fullpage', {
//   navigation: true,
//   responsiveWidth: 700,
//   anchors: ['home', 'about', 'services', 'map', 'testimonials', 'contact'],
//   navigationPosition: 'right',
//   fixedElements: '#header, .footer',
//   onLeave: function (origin, destination, direction) {
//     const section = destination.item;
//     const getText = section.querySelectorAll(".text-anim");
//     const textAnimation = new TimelineMax();
//     textAnimation.from(getText, 1, {
//       height: 0,
//       ease: Expo.easeInOut,
//     });
//
//     if(destination.index === 0) {
//       const menuColorAnimation = new TimelineMax();
//       menuColorAnimation.to(".menu", 0.3, {
//         css: {color: "#EFD9B9"},
//       });
//     }
//
//     if(destination.index === 1) {
//       const menuColorAnimation = new TimelineMax();
//       menuColorAnimation.to(".menu", 0.3, {
//         css: {color: "#2D2A3E"},
//       });
//     }
//
//     if(destination.index === 5) {
//       const menuColorAnimation = new TimelineMax();
//       menuColorAnimation.to(".menu", 0.3, {
//         css: {color: "#EFD9B9"},
//       });
//     }
//
//     if(destination.index === 4) {
//       const getIcon = section.querySelectorAll(".contact-icons-div");
//       const iconAnimation = new TimelineMax();
//       iconAnimation.staggerFrom(getIcon, 1, {
//         x: -30,
//         opacity: 0,
//         delay: 0.3,
//         stagger:0.1,
//         ease: Expo.easeOut,
//       });
//       iconAnimation.to(".menu", 0.3, {
//         css: {color: "#EFD9B9"},
//         delay: -1,
//       });
//     }
//
//     if(destination.index === 3) {
//       const getRight = section.querySelector(".s6-right");
//       const sliderAnimation = new TimelineMax();
//       sliderAnimation.from(getRight, 1, {
//         x: 200,
//         opacity: 0,
//         delay: 0.3,
//         ease: Expo.easeOut,
//       });
//       sliderAnimation.to(".menu", 0.3, {
//         css: {color: "#EFD9B9"},
//         delay: -1,
//       });
//     }
//
//     if(destination.index === 4) {
//       const getSlider = section.querySelector(".s2-right");
//       const sliderAnimation = new TimelineMax();
//       sliderAnimation.from(getSlider, 1, {
//         x: 100,
//         opacity: 0,
//         delay: 0.3,
//         ease: Expo.easeOut,
//       });
//       sliderAnimation.to(".menu", 0.3, {
//         css: {color: "#EFD9B9"},
//         delay: -1,
//       });
//     }
//
//     if(destination.index === 2) {
//       const getCards = section.querySelectorAll(".s3-card");
//       const cardAnimation = new TimelineMax();
//       cardAnimation.staggerFrom(getCards, 0.5, {
//         y: 30,
//         opacity: 0,
//         stagger: 0.08,
//         ease: Expo.easeInOut,
//       });
//       cardAnimation.to(".menu", 0.3, {
//         css: {color: "#2D2A3E"},
//         delay: -1,
//       });
//     }
//   },
// });

// gsap menu

var menuAnimation = gsap.timeline({paused:true});

menuAnimation.to(".menu-open", 1, {
  rotation: -180,
  opacity: 0,
  ease: Expo.easeInOut,
});
menuAnimation.to(".menu-close", 1, {
  rotation: -180,
  opacity: 1,
  ease: Expo.easeInOut,
  delay: -1,
});
menuAnimation.to(".menu h1", 1, {
  opacity: 1,
  ease: Expo.easeInOut,
  delay: -1,
});
menuAnimation.to(".menu-name", 1, {
  opacity: 1,
  ease: Expo.easeInOut,
  delay: -1,
});
menuAnimation.to(".menu-bg-1", 1, {
  y: "0vh",
  ease: Expo.easeInOut,
  delay: -1,
});
menuAnimation.to(".menu-nav", 1, {
  y: "0vh",
  ease: Expo.easeInOut,
  delay: -0.9,
});
menuAnimation.to(".menu-bg-3", 1, {
  y: "80vh",
  skewY: -10,
  ease: Expo.easeInOut,
  delay: -0.9,
});

menuAnimation.reverse();

$(document).on("click", ".menu", function () {
  menuAnimation.reversed(!menuAnimation.reversed());
});

$(document).on("click", ".menu-nav ul li", function () {
  menuAnimation.reversed(!menuAnimation.reversed());
});

// gsap contact icon
