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

let sections =document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelectorAll('header nav a [href*=' + id + ']').classList.add
                ('active');
            });
        };
    });
};