const left = document.getElementById('left');
const right = document.getElementById('right');
const burgerItems = document.getElementById('burger-item');

const minRight = 0;
const maxRight = 2000;
const step = 2000;
let currentRight = 0;

burgerItems.style.right = currentRight;

right.addEventListener("click", function(e){
  e.preventDefault();
  if (currentRight < maxRight){
    currentRight += step;
    burgerItems.style.right = currentRight + "px";
  }
});

left.addEventListener("click", function (e) {
  e.preventDefault();
  if(currentRight > minRight) {
    currentRight -= step;
    burgerItems.style.right = currentRight + "px";
  }
});
