function toggleMenu() {
  var menuItems = document.getElementById("menuItems");
  if (menuItems.classList.contains("showing")) {
    menuItems.classList.remove("showing");
  } else {
    menuItems.classList.add("showing");
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const homeSection = document.querySelector("#Home");

  // Add event listener for scroll to toggle zoom-out class
  window.addEventListener("scroll", function () {
    if (isElementInViewport(homeSection)) {
      homeSection.classList.add("zoom-out");
    } else {
      homeSection.classList.remove("zoom-out");
    }
  });

  // Check if an element is in the viewport
  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
});
