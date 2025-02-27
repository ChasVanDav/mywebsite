const body = document.body
const hamburgerMenu = document.getElementById("hamburger-menu")
const menu = document.getElementById("menu")

// Hamburger menu toggle
hamburgerMenu.addEventListener("click", () => {
  menu.classList.toggle("active")
  searchResultsDiv.style.display = "none" // Hide search results when menu is opened
})
