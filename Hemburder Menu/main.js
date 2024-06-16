let hamburger = document.getElementById('hamburger');
let closeHamburger = document.getElementById('closeHamburger');
let menu = document.getElementById('menu');

hamburger.addEventListener('click', ()=>{
  menu.style.left = '0%';
})
closeHamburger.addEventListener('click', ()=>{
  menu.style.left = '-100%';
})

