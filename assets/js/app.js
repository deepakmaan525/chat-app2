let smallScreen = document.querySelector(".smallScreen");
let menu = document.querySelector(".menu");
let body = document.querySelector("body");
let span1 = document.querySelector(".span1");
let span2 = document.querySelector(".span2");
let span3 = document.querySelector(".span3");
let navBtn = document.querySelector(".navLinks");

menu.addEventListener("click", function () {
  smallScreen.classList.toggle("show");
  body.classList.toggle("overflow-hidden");
  span1.classList.toggle("span4");
  span2.classList.toggle("span5");
  span3.classList.toggle("span6");
});
navBtn.addEventListener("click", function () {
  smallScreen.classList.remove("show");
  body.classList.remove("overflow-hidden");
  span1.classList.remove("span4");
  span2.classList.remove("span5");
  span3.classList.remove("span6");
});
