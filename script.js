window.onload = function () {
  window.scrollTo(0, 0); // Scroll ke posisi x=0, y=0
};

const navIcon = document.getElementById("nav-icon");
const navMenu = document.querySelector(".nav-menu");

navIcon.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  const icon = navIcon.querySelector("i");

  // Ganti icon hamburger ke icon close
  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});

AOS.init({
  duration: 1300, // Durasi animasi dalam milidetik (default: 400)
  once: true,
});
