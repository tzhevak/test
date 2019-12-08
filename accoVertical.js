const items = document.querySelectorAll(".team-accordeon__item");

for (const item of items) {
  item.addEventListener('click', handleAccoOpening);
}

function handleAccoOpening(e){
  const curItem = e.currentTarget;
  const isClosed = curItem.classList.contains("active");
  e.preventDefault();

  if (isClosed){
    closeItemsAndRemoveActive(items);
  } else {
    closeItemsAndRemoveActive(items);
    openItem(curItem);
  }
}

function closeItemsAndRemoveActive(items) {
  Array.from(items).forEach(elem => {
    elem.classList.remove("active");
    elem.querySelector(".team-accordeon__content-wrap").style.height = 0;
    
  } )
}

function openItem(item) {
  const content = item.querySelector(".team-accordeon__content-wrap");
  const textBlock = content.firstElementChild;
  //const reqHeight = textBlock.getBoundingClientRect().height;
  item.classList.add("active");
  content.style.height = "100%";
}