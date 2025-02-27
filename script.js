const body = document.body
const hamburgerMenu = document.getElementById("hamburger-menu")
const menu = document.getElementById("menu")

// Hamburger menu toggle
hamburgerMenu.addEventListener("click", () => {
  menu.classList.toggle("active")
})

// Close menu when clicking outside of it
document.addEventListener("click", (event) => {
  if (!menu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
    menu.classList.remove("active")
  }
})
