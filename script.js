// Função para efeito "typed" simples no título #typed-title
const typedTitle = document.getElementById('typed-title');
const textToType = "Desenvolvedor Web • Solucionador de problemas • Apaixonado por tecnologia";
let charIndex = 0;

function typeEffect() {
  if (charIndex < textToType.length) {
    typedTitle.textContent += textToType.charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 80);
  }
}

// Alternar tema claro / escuro
const toggleThemeBtn = document.getElementById('toggleTheme');
toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Opcional: salvar preferência no localStorage
  if(document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Carregar tema salvo (se houver)
window.addEventListener('DOMContentLoaded', () => {
  if(localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
  typeEffect();
});

// Botão "Voltar ao topo"
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if(window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});