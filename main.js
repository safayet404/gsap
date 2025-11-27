gsap.to("#page2 h1", {
  xPercent: -150, // better than using transform string
  scrollTrigger: {
    trigger: "#page2 h1",
    scroller: "body",
    markers: true,
    start: "top 80%", // when h1 is a bit lower in viewport
    end: "top 20%",
    scrub: true, // tie animation progress to scroll
    pin: true,
  },
});
