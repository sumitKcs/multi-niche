const side_bar = document.getElementById("side_bar");
const menu_icon = document.getElementById("menu_icon");
const sidebar_close_button = document.getElementById("sidebar_close_button");
let bottom_menu_items = document.getElementById("bottom_menu_items");

// toggle mobile menu
menu_icon.addEventListener("click", () => {
  side_bar.style.display = "flex";
  document.body.classList.add("no-scroll");
});

sidebar_close_button.addEventListener("click", () => {
  side_bar.style.display = "none";
  document.body.classList.remove("no-scroll");
});

