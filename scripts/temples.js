document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const menuButton = document.getElementById("menu");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
  if (navMenu.style.display === "flex") {
    navMenu.style.display = "none";
    menuButton.innerHTML = "&#9776;";
  } else {
    navMenu.style.display = "flex";
    menuButton.innerHTML = "&#10005;";
  }
});