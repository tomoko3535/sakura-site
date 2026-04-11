const blocks = document.querySelectorAll(".photo-block");

function createPetal(block) {
  const petal = document.createElement("div");
  petal.className = "petal";

  petal.style.left = Math.random() * block.clientWidth + "px";
  petal.style.animationDuration = 5 + Math.random() * 5 + "s";

  block.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 10000);
}

/* ★読み込み後すぐ実行 */
blocks.forEach(block => {
  setInterval(() => createPetal(block), 400);
});



