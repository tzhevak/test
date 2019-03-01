const left = document.getElementById('left');
const right = document.getElementById('right');
const burgerItems = document.getElementById('burger-item');

right.addEventListener("click", function(e){
  e.preventDefault();
  loop("right");
});

left.addEventListener("click", function(e){
  e.preventDefault();
  loop("left");
});

function loop(direction) {
  if(direction==="right") {
    burgerItems.appendChild(burgerItems.firstElementChild);
  } else {
    burgerItems.insertBefore(burgerItems.lastElementChild, burgerItems.firstElementChild);
  }
}
