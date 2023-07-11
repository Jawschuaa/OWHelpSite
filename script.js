function toggleMenu() {
  var menuItems = document.getElementById("menuItems");
  if (menuItems.classList.contains("showing")) {
    menuItems.classList.remove("showing");
  } else {
    menuItems.classList.add("showing");
  }
}
