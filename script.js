const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");

// Redireciona para uma página de comemoração
yesButton.addEventListener("click", () => {
  window.location.href = "comemoração/comemoração.html"; 
});

// Faz o botão "Não" fugir ao passar o mouse ou clique
function desviaBotao() {
  const container = document.querySelector(".container");
  const containerRect = container.getBoundingClientRect();

  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;

  // Calcula posições aleatórias dentro do contêiner principal, sem deixar o botão sair
  const maxX = containerRect.width - buttonWidth;
  const maxY = containerRect.height - buttonHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  // Move o botão "Não" dentro do contêiner principal
  noButton.style.position = "absolute"; 
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
}

// Eventos para mouseover e click/touch
noButton.addEventListener("mouseover", desviaBotao);
noButton.addEventListener("click", desviaBotao);
noButton.addEventListener("touchstart", desviaBotao);

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
  