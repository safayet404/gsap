var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var bubbleLayer = document.querySelector("#bubble-layer");

main.addEventListener("mousemove", function (e) {
  // move the custom cursor
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.18,
    ease: "power2.out",
    opacity: 1,
  });

  createBubble(e.clientX, e.clientY);
});

// hide cursor when leaving window
document.body.addEventListener("mouseleave", function () {
  gsap.to(cursor, {
    opacity: 0,
    duration: 0.3,
  });
});

function createBubble(x, y) {
  var bubble = document.createElement("div");
  bubble.classList.add("bubble");
  bubbleLayer.appendChild(bubble);

  // random size for variation
  var size = 10 + Math.random() * 25; // 10–35px
  bubble.style.width = size + "px";
  bubble.style.height = size + "px";

  bubble.style.left = x + "px";
  bubble.style.top = y + "px";

  // random horizontal drift & upward float
  var driftX = (Math.random() - 0.5) * 80; // -40 to 40 px sideways
  var driftY = -(40 + Math.random() * 100); // -40 to -140 px upward

  gsap.to(bubble, {
    x: driftX,
    y: driftY,
    scale: 1 + Math.random() * 0.8,
    opacity: 0,
    duration: 0.9 + Math.random() * 0.6,
    ease: "power2.out",
    onComplete: function () {
      bubble.remove();
    },
  });
}
