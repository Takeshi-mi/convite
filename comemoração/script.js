// Confetti Effect
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function createConfetti() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    size: Math.random() * 8 + 4,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    velocityX: Math.random() * 2 - 1,
    velocityY: Math.random() * 3 + 2,
  };
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach((particle, index) => {
    ctx.fillStyle = particle.color;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fill();

    particle.x += particle.velocityX;
    particle.y += particle.velocityY;

    if (particle.y > canvas.height) {
      confetti[index] = createConfetti();
    }
  });
}

function loop() {
  drawConfetti();
  requestAnimationFrame(loop);
}

// Inicializa os confetes
for (let i = 0; i < 200; i++) {
  confetti.push(createConfetti());
}
loop();

// Reproduzir música automaticamente
const audio = document.getElementById("background-music");
audio.volume = 0.5;
audio.play();


// Cria uma trilha de mouse
document.addEventListener("mousemove", (e) => {
    // Cria um elemento de trilha
    const trail = document.createElement("div");
    trail.classList.add("trail");
  
    // Posiciona a trilha com base na posição do mouse
    trail.style.left = `${e.pageX}px`;
    trail.style.top = `${e.pageY}px`;
  
    // Adiciona a trilha ao corpo da página
    document.body.appendChild(trail);
  
    // Remove a trilha após 1 segundo
    setTimeout(() => {
      trail.remove();
    }, 1000);
  });