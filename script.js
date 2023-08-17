function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide-1");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
var slideIndexTwo = 1;
showDivsTwo(slideIndexTwo);

function plusDivsTwo(n) {
  showDivsTwo((slideIndexTwo += n));
}
function showDivsTwo(n) {
  var i;
  var x = document.getElementsByClassName("slide-2");
  if (n > x.length) {
    slideIndexTwo = 1;
  }
  if (n < 1) {
    slideIndexTwo = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexTwo - 1].style.display = "block";
}
var slideIndexThree = 1;
showDivsThree(slideIndexThree);

function plusDivsThree(n) {
  showDivsThree((slideIndexThree += n));
}
function showDivsThree(n) {
  var i;
  var x = document.getElementsByClassName("slide-3");
  if (n > x.length) {
    slideIndexThree = 1;
  }
  if (n < 1) {
    slideIndexThree = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexThree - 1].style.display = "block";
}
