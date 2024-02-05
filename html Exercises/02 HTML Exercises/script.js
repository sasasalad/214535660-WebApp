const lines = document.querySelector(".lines");
const navMenu = document.querySelector(".nav-menu");

lines.addEventListener("click", () => {
    lines.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
addEventListener("click", () => {
    lines.classList.remove("active");
    navMenu.classList.remove("active");
}))