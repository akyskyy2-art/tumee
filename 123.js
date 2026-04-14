// Floating text
const messages = ["hairtai", "unsy", "minii shn uree" , "gantshan miniih" , "hoorhon"];
const container = document.getElementById("text-container");

function createFloatingText() {
  const text = document.createElement("div");
  text.className = "floating-text";
  text.textContent = messages[Math.floor(Math.random() * messages.length)];
  text.style.left = `${Math.random() * 100}%`;
  text.style.fontSize = `${16 + Math.random() * 40}px`;
  container.appendChild(text);

  setTimeout(() => {
    container.removeChild(text);
  }, 10000);
}

setInterval(createFloatingText, 500);

// Canvas hearts
const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function createHeart() {
  const x = Math.random() * canvas.width;
  const y = canvas.height + 10;
  const size = 10 + Math.random() * 10;
  const speed = 1 + Math.random() * 2;
  hearts.push({ x, y, size, speed });
}

function drawHeart(x, y, size) {
  ctx.save();
  ctx.translate(x, y);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(-size, -size, -size, size / 2, 0, size);
  ctx.bezierCurveTo(size, size / 2, size, -size, 0, 0);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.restore();
}

function animateHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach((heart, index) => {
    heart.y -= heart.speed;
    drawHeart(heart.x, heart.y, heart.size);
    if (heart.y + heart.size < 0) {
      hearts.splice(index, 1);
    }
  });
  requestAnimationFrame(animateHearts);
}

setInterval(createHeart, 300);
animateHearts();