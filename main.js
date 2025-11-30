var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var smokeLayer = document.querySelector("#smoke-layer");

main.addEventListener("mousemove", function (e) {
  // move cursor
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.18,
    ease: "power2.out",
    opacity: 1,
  });

  createSmokePuff(e.clientX, e.clientY);
});

// hide cursor when leaving window
document.body.addEventListener("mouseleave", function () {
  gsap.to(cursor, {
    opacity: 0,
    duration: 0.3,
  });
});

function createSmokePuff(x, y) {
  var puff = document.createElement("div");
  puff.classList.add("smoke-puff");
  smokeLayer.appendChild(puff);

  puff.style.left = x + "px";
  puff.style.top = y + "px";

  // random horizontal drift
  var driftX = (Math.random() - 0.5) * 80; // -40 to 40 px
  // random upward distance
  var driftY = -(40 + Math.random() * 60); // -40 to -100

  gsap.to(puff, {
    x: driftX,
    y: driftY,
    scale: 1.8 + Math.random(), // get bigger as it rises
    opacity: 0,
    duration: 0.9 + Math.random() * 0.4,
    ease: "power2.out",
    onComplete: function () {
      puff.remove();
    },
  });
}
