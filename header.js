document.getElementById('menu-for-mobile').onclick = function() {
document.getElementById('header').classList.add('header_fullscreen');
}
document.getElementById('close').onclick = function() {
document.getElementById('header').classList.remove('header_fullscreen');
}