document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    let noBtnClickCount = 0;
  
    // Função para criar o efeito de trilha
    function createTrail(e) {
      const trail = document.createElement('div');
      trail.className = 'trail';
      trail.style.left = e.pageX + 'px';
      trail.style.top = e.pageY + 'px';
      document.body.appendChild(trail);
  
      setTimeout(() => {
        document.body.removeChild(trail);
      }, 1000);
    }
  
    // Adiciona o efeito de trilha ao movimento do mouse
    document.addEventListener('mousemove', createTrail);
  
    // Botão "Sim"
    yesBtn.addEventListener('click', () => {
      window.location.href = 'comemoração/comemoraçãomarcos.html';
    });
  
    // Botão "Não"
    noBtn.addEventListener('mouseover', (e) => {
      noBtnClickCount++;
      
      if (noBtnClickCount <= 10) {
        const container = document.querySelector('.container');
        const containerRect = container.getBoundingClientRect();
        
        // Gera posições aleatórias dentro do container
        const maxX = containerRect.width - noBtn.offsetWidth;
        const maxY = containerRect.height - noBtn.offsetHeight;
        
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        
        noBtn.style.position = 'absolute';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
      }
    });
}); 