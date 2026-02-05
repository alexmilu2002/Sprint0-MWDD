const themeToggle = document.querySelector('.theme-toggle');

// Check wat het huidige theme is (of standaard light)
const currentTheme = localStorage.getItem('theme') || 'light';
setTheme(currentTheme);

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

themeToggle.addEventListener('click', () => {
  const activeTheme = document.documentElement.getAttribute('data-theme');

  if (activeTheme === 'light') {
    setTheme('dark');
  } else {
    setTheme('light');
  }
});

