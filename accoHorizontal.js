const itemsMenu = document.querySelectorAll(".menu-accordeon__item");

for (const item of itemsMenu) {
  item.addEventListener('click', handleAccoMenuOpening);
}

function handleAccoMenuOpening(e){
  const curItemMenu = e.currentTarget;
  const isMenuClosed = curItemMenu.classList.contains("active");
  e.preventDefault();

  if (isMenuClosed){
    closeItemsAndRemoveActiveMenu(itemsMenu);
  } else {
    closeItemsAndRemoveActiveMenu(itemsMenu);
    openItemMenu(curItemMenu);
  }
}

function closeItemsAndRemoveActiveMenu(itemsMenu) {
  Array.from(itemsMenu).forEach(elem => {
    elem.classList.remove("active");
    elem.querySelector(".menu-accordeon__content").style.height = 0;
    
  } )
}

function openItemMenu(item) {
  const contentMenu = item.querySelector(".menu-accordeon__content");
  const textBlockMenu = contentMenu.firstElementChild;
  //const reqHeight = textBlock.getBoundingClientRect().height;

  item.classList.add("active");
  contentMenu.style.height = "100%";
}