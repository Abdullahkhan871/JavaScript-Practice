let body = document.querySelector('.box');
let crsr = document.querySelector('.cursor');

// console.log(body);

body.addEventListener('mousemove', (eve)=>{
  crsr.style.left = eve.x+'px';
  crsr.style.top = eve.y+'px';
  body.style.cursor = 'none';
})