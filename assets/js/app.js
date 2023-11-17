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
// back to top //
let backToTop = document.getElementById('backToTop')
 backToTop.addEventListener("click", function () {
 window.scrollTo(0, 0,{behavior: 'smooth'})
});
window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
        backToTop.classList.remove('hidden');
        backToTop.classList.add('flex');
    } else {
        backToTop.classList.remove('flex');
        backToTop.classList.add('hidden');
    }
});
