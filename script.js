//! temporary
const leye = document.querySelector(".left-eye");
const reye = document.querySelector(".right-eye");

const lshut = document.querySelector(".left-shut");
const rshut = document.querySelector(".right-shut");

leye.addEventListener("mouseover", () => {
  lshut.style.height = "50px";
  rshut.style.height = "50px";
});
leye.addEventListener("mouseout", () => {
  lshut.style.height = "0px";
  rshut.style.height = "0px";
});

reye.addEventListener("mouseover", () => {
  lshut.style.height = "50px";
  rshut.style.height = "50px";
});
reye.addEventListener("mouseout", () => {
  lshut.style.height = "0px";
  rshut.style.height = "0px";
});
