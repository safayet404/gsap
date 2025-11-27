gsap.to(".box1", {
  x: 1200,
  delay: 1,
  duration: 2,
  y: 300,
  rotation: 380,
  backgroundColor: "#ff2421",
  borderRadius: "50%",
});

gsap.to(".box2", {
  x: 1200,
  delay: 1,
  duration: 2,

  rotation: 380,
  width: 1,
  height: 1,
  repeat: -1,
  yoyo: true,
});

gsap.from("h1", {
  opacity: 0,
  duration: 1,
  y: 30,
  delay: 1,
  stagger: -0.5,
});
