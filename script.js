const hamburger = document.querySelector(".hamburger");
const navContent = document.querySelector(".nav-content");

hamburger.addEventListener("click", () => {
    navContent.classList.toggle("active");
    hamburger.textContent = navContent.classList.contains("active") ? "✕" : "☰";
});