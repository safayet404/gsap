var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");

main.addEventListener("mousemove", function (events) {
  gsap.to(cursor, {
    x: events.clientX,
    y: events.clientY,
    duration: 0.3,
    ease: "power2.out",
    opacity: 1,
  });
});

// when mouse leaves the *page*
document.body.addEventListener("mouseleave", function () {
  gsap.to(cursor, {
    opacity: 0,
    duration: 0.3,
  });
});
