var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var rippleLayer = document.querySelector("#ripple-layer");

main.addEventListener("mousemove", function (e) {
  // move main cursor
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.2,
    ease: "power2.out",
    opacity: 1,
  });

  createRipple(e.clientX, e.clientY);
});

// hide cursor when leaving window
document.body.addEventListener("mouseleave", function () {
  gsap.to(cursor, {
    opacity: 0,
    duration: 0.3,
  });
});

function createRipple(x, y) {
  var ripple = document.createElement("div");
  ripple.classList.add("ripple");
  rippleLayer.appendChild(ripple);

  ripple.style.left = x + "px";
  ripple.style.top = y + "px";

  // animate ripple (like water expanding & fading)
  gsap.to(ripple, {
    scale: 4, // how big the ring grows
    opacity: 0,
    duration: 0.7,
    ease: "power2.out",
    onComplete: function () {
      ripple.remove();
    },
  });
}
