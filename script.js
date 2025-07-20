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

function fakeSendMessage(event) {
  event.preventDefault();
  alert("Aww! Your message has been wrapped with love and sent to Aditya's heart 💌💖");
  return false;
}

document.addEventListener("DOMContentLoaded", () => {
  const letterBox = document.getElementById("letterBox");

  if (letterBox) {
    const letterLines = [
      "My dearest Sona, 💖",
      "",
      "From the moment we started talking,",
      "you made my world brighter, softer, warmer.",
      "",
      "Your laughter is my favorite melody,",
      "your eyes, my favorite view,",
      "and your voice, my favorite comfort.",
      "",
      "Even on my worst days,",
      "you make me feel like I'm worth loving.",
      "",
      "This website is just a tiny way of saying —",
      "I love you more than words can ever say.",
      "",
      "You're not just my girlfriend.",
      "You're my heart, my peace, my forever. 💍",
      "",
      "Forever yours,",
      "— Aditya ❤️"
    ];

    let lineIndex = 0;
    function typeLine() {
      if (lineIndex < letterLines.length) {
        const line = document.createElement("p");
        line.textContent = "";
        letterBox.appendChild(line);

        let charIndex = 0;
        const interval = setInterval(() => {
          if (charIndex < letterLines[lineIndex].length) {
            line.textContent += letterLines[lineIndex][charIndex++];
          } else {
            clearInterval(interval);
            lineIndex++;
            setTimeout(typeLine, 400); // next line after pause
          }
        }, 30); // typing speed
      }
    }

    typeLine();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const giftBtn = document.getElementById("giftBox");
  const surpriseMessage = document.getElementById("surpriseMessage");

  if (giftBtn && surpriseMessage) {
    giftBtn.addEventListener("click", () => {
      giftBtn.classList.add("opened");
      surpriseMessage.classList.add("visible");

      // Confetti burst
      for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDuration = `${2 + Math.random() * 2}s`;
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 4000);
      }
    });
  }
});
