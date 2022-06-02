const title = document.querySelector('.hello h1');

function handleTitleClick() {
  title.style.color = 'blue';
}
function handleMouseEmnter() {
  title.innerText = 'Mouse is here!';
  title.style.color = 'green';
}
function handleMouseLeave() {
  title.style.color = 'cyan';
  title.innerText = 'Mouse is gone!';
}
function handleWindowResize() {
  title.innerText = 'You just resized!';
  title.style.color = 'purple';
}
function handleWindowRightClick() {
  title.innerText = 'That was a right click';
  title.style.color = 'orange';
}

title.addEventListener('click', handleTitleClick);
title.addEventListener('mouseenter', handleMouseEmnter);
title.addEventListener('mouseleave', handleMouseLeave);

window.addEventListener('resize', handleWindowResize);
window.addEventListener('contextmenu', handleWindowRightClick);
