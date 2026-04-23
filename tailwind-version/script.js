const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const html = document.documentElement;

themeToggle.addEventListener("click", () => {
  if (html.hasAttribute("data-bs-theme")) {
    // Lógica Bootstrap
    const newTheme =
      html.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
    html.setAttribute("data-bs-theme", newTheme);
    updateIcon(newTheme === "dark");
  } else {
    // Lógica Tailwind
    html.classList.toggle("dark");
    updateIcon(html.classList.contains("dark"));
  }
});

function updateIcon(isDark) {
  themeIcon.className = isDark ? "bi bi-sun-fill" : "bi bi-moon-stars-fill";
}
