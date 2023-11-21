const starsContainer = document.querySelector('.stars-container');

function createStar() {
  const star = document.createElement('div');
  star.className = 'stars';

  // Definindo tamanhos aleatórios
  const size = Math.floor(Math.random() * 6) + 1; // Valores entre 1 e 3
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  star.style.top = `${Math.random() * 100}vh`;
  star.style.left = `${Math.random() * 100}vw`;
  starsContainer.appendChild(star);

  setTimeout(() => {
    star.style.animation = 'twinkle 5s infinite';
  }, Math.random() * 10000);
}

for (let i = 0; i < 80; i++) {
  createStar();
}

const points = document.querySelectorAll('.point');

//////////////////////////////////////////////////////////////////////
