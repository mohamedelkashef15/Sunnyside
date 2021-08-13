const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav-ul");
const a = document.querySelector(".a");
const b = document.querySelector(".b");
const c = document.querySelector(".c");
const d = document.querySelector(".d");

hamburger.addEventListener("click", function () {
  navUl.classList.toggle("show");
});

a.addEventListener("click", function () {
  navUl.classList.toggle("show");
});
b.addEventListener("click", function () {
  navUl.classList.toggle("show");
});
c.addEventListener("click", function () {
  navUl.classList.toggle("show");
});
d.addEventListener("click", function () {
  navUl.classList.toggle("show");
});
