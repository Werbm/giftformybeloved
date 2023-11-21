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

function rocketcss(rocket, target, theclass) {
    
	var cloned = $(rocket).clone();
	
	var offset_target = $(target).offset();
	var offset_rocket = $(rocket).offset();
	
	cloned.insertAfter(rocket);
	$(rocket).css({ "opacity": "0" });
	cloned.css({ "position": "fixed", "z-index": "999999", "top": offset_rocket.top + "px", "left": offset_rocket.left + "px", "right": "auto", "bottom": "auto", "margin": "auto", "padding": "auto", "opacity": "1" }).animate({ 'top': offset_target.top + 'px', 'left': offset_target.left + 'px'}, 1500);
	cloned.addClass('mover ' + (theclass || 'rocketPulseHole') );
	setTimeout(function () {
		cloned.fadeOut(300);
	}, 1500);
	return cloned;
}
const foguete = document.querySelector('.rocket')
const target = document.querySelector('.target-container')
const rocketGost = document.querySelector('.rocketGost')

document.addEventListener('click', function(e){
    const elemento = e.target;
    console.log(elemento)

    if (elemento.classList.contains('btn')) {
        rocketcss(foguete, target, rocketGost);
    }
})

