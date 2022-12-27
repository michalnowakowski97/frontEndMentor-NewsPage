const nav = document.querySelector("nav");
const menu = document.querySelector(".show");
const closeing = document.querySelector(".close");
const dark = document.createElement('div');

function showNav() {
  nav.style.display = "block";
  menu.classList.toggle("menu");
  closeing.classList.toggle("menu");
  dark.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
  dark.style.height = "100vh";
  dark.style.width = "100vw";
  dark.style.position = "fixed";
  dark.style.top = 0;
  dark.style.display = "block"
  document.body.appendChild(dark)
}
function closeNav() {
  nav.style.display = "none";
  closeing.classList.toggle("menu");
  menu.classList.toggle("menu");
  dark.style.display = "none"
}

menu.addEventListener("click", showNav);
closeing.addEventListener("click", closeNav);
