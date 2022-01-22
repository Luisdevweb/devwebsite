const btnMenu = document.querySelector(".menu");
const navBar = document.querySelector(".navbar");

window.addEventListener("click", (e) => {
  e.target.classList.contains("menu")
    ? navBar.classList.add("navbar--translate")
    : navBar.classList.remove("navbar--translate");
});
