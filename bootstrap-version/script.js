document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const htmlElement = document.documentElement;

  // Função para aplicar o tema
  const applyTheme = (theme) => {
    htmlElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      themeIcon.classList.replace("bi-moon-stars-fill", "bi-sun-fill");
      themeToggle.classList.replace(
        "btn-outline-secondary",
        "btn-outline-warning",
      );
    } else {
      themeIcon.classList.replace("bi-sun-fill", "bi-moon-stars-fill");
      themeToggle.classList.replace(
        "btn-outline-warning",
        "btn-outline-secondary",
      );
    }
  };

  // Carrega o tema salvo ou o padrão do sistema
  const savedTheme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");

  applyTheme(savedTheme);

  // Evento de clique para alternar o tema
  themeToggle.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-bs-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    applyTheme(newTheme);
  });
});
