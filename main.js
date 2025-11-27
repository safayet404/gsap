// gsap.to(".box1", {
//   x: 1500,
//   rotate: 360,
//   duration: 1.5,
//   delay: 1,
//   repeat: -1,
//   yoyo: true,
// });

// gsap.to(".box2", {
//   x: 1500,
//   rotate: 360,
//   backgroundColor: "yellow",
//   duration: 1.5,
//   delay: 2.5,
// });

// tl.to(".box1", {
//   x: 1500,
//   rotate: 360,
//   duration: 2,
//   delay: 1,
// });

// tl.to(".box2", {
//   x: 1500,
//   duration: 2,
//   delay: 1.5,
// });

// tl.to(".box3", {
//   x: 1500,
//   duration: 2,
//   rotate: -360,
//   delay: 1,
// });

var tl = gsap.timeline();

tl.from("h2", {
  y: -30,
  opacity: 0,
  delay: 1,
  duration: 0.5,
});

tl.from("h4", {
  y: -30,
  opacity: 0,
  delay: 1,
  duration: 0.5,
  stagger: 0.5,
});

tl.from("h1", {
  y: 20,
  opacity: 0,
  duration: 0.5,
  scale: 0.2,
});
