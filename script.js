document.addEventListener('DOMContentLoaded', function () {
  // Título com digitação animada
  const title = document.getElementById("typed-title");
  const text = "Bem-vindo! Eu sou Higor Goltara.";
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      title.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  }
  typeWriter();

  // Botão voltar ao topo
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Alternar tema claro/escuro
  const toggleThemeBtn = document.getElementById("toggleTheme");
  toggleThemeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
});
