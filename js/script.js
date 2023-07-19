// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika humberger menu di klik
const hum = document.querySelector("#humberger-menu");

hum.onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luat sidebar untuk menghilangkan nav
document.addEventListener("click", (e) => {
  if (!hum.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
