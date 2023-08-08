document.addEventListener("click", documentClick);

function documentClick(e) {
  const targetItem = e.target;
  if (targetItem.closest(".icon-menu")) {
    document.documentElement.classList.toggle("menu-open");
  }
}

// document.querySelector(".icon-menu").addEventListener("click", function () {
//   // Toggle the "menu-open" class on the documentElement
//   document.documentElement.classList.toggle("menu-open");

//   // Toggle the "hidden" class on the home section
//   document.getElementById("home").classList.toggle("hidden");
// });

function toggleSectionVisibility(sectionId) {
  var section = document.getElementById(sectionId);
  section.classList.toggle("hidden");
}

var menuIcon = document.querySelector(".icon-menu");
menuIcon.addEventListener("click", function () {
  toggleSectionVisibility("main");
  toggleSectionVisibility("footer");
});

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
function handleImageAnimation() {
  const animatedImages = document.querySelectorAll(".use__four .main__img");

  animatedImages.forEach((image) => {
    if (isInViewport(image)) {
      image.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", handleImageAnimation);
handleImageAnimation();



// ===========
document.addEventListener("DOMContentLoaded", function () {
  const homeSection = document.getElementById("home");
  homeSection.classList.remove("hidden");
});
