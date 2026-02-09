//Light en Dark Mode
const themeToggle = document.querySelector('.themetoggle');

// Check wat het huidige theme is.
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

// Eventlistener die reageert wanneer er op de Light/Dark Knop wordt gedrukt
themeToggle.addEventListener('click', () => {
  const activeTheme = document.documentElement.getAttribute('data-theme');

  if (activeTheme === 'light') {
    setTheme('dark');
  } else {
    setTheme('light');
  }
});

//Dialog Pop-Up
const showProfileDialogBtn = document.getElementById("buttonprofile");
const profileDialog = document.getElementById("profileDialog");

const showGoalsDialogBtn = document.getElementById("buttongoals");
const goalsDialog = document.getElementById("goalsDialog");

showProfileDialogBtn.addEventListener("click", () => profileDialog.showModal());

showGoalsDialogBtn.addEventListener("click", () => goalsDialog.showModal());


