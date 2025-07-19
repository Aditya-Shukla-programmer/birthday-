document.addEventListener("DOMContentLoaded", () => {
  const heartsContainer = document.querySelector(".floating-hearts");

  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${3 + Math.random() * 2}s`;
    heartsContainer.appendChild(heart);
  }
});
