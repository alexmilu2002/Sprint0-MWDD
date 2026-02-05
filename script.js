const lightMode = document.querySelector('.sun');
const darkMode = document.querySelector('.moon');

const currentTheme = localStorage.getItem('theme');

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

lightMode.onclick = function () {
  setTheme('light');
};

darkMode.onclick = function () {
  setTheme('dark');
};

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
}

