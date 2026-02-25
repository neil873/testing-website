// sticky shadow
window.addEventListener("scroll",()=>{
  document.querySelector(".navbar")
    .classList.toggle("shadow",window.scrollY>20)
});
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});