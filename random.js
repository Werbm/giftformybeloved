//**posição aleatória da estrela dentro do container */
const imagem = document.getElementById("estrela")

function definirPosicaoAleatoria() {
    const container = document.querySelector(".container"); // Seleciona o container
  
    // Calcula uma posição x e y aleatória dentro do container
    const maxX = container.offsetWidth - imagem.width;
    const maxY = container.offsetHeight - imagem.height;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
  
    // Define a posição da imagem
    imagem.style.left = `${randomX}px`;
    imagem.style.top = `${randomY}px`;
  }
  
  // Chama a função para definir a posição aleatória quando a página carregar
  window.addEventListener("load", definirPosicaoAleatoria);
  
  // Chama a função para definir a posição aleatória quando o usuário clicar na imagem
  imagem.addEventListener("click", definirPosicaoAleatoria);