document.addEventListener("click", documentClick);

function documentClick(e) {
  const targetItem = e.target;
  if (targetItem.closest(".icon-menu")) {
    document.documentElement.classList.toggle("menu-open");
  }
}



function toggleHomeSection() {
  var homeSection = document.getElementById("home");
  homeSection.classList.toggle("hidden");
}
var menuIcon = document.querySelector(".icon-menu");
menuIcon.addEventListener("click", function () {
  toggleHomeSection();
});


// document.querySelector(".icon-menu").addEventListener("click", function () {
//   // Toggle the "menu-open" class on the documentElement
//   document.documentElement.classList.toggle("menu-open");

//   // Toggle the "hidden" class on the home section
//   document.getElementById("home").classList.toggle("hidden");
// });
