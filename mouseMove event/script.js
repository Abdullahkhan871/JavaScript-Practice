let elem1 = document.querySelectorAll('.elem')
let elemImage = document.querySelectorAll('.elem img');


// console.log(elem1)
// console.log(elem1)

elem1.forEach((val)=>{
  val.addEventListener('mouseenter', ()=>{
    val.childNodes[3].style.opacity = 1;
    val.style.cursor = 'none';
  })
  val.addEventListener('mouseleave', ()=>{
    val.childNodes[3].style.opacity = 0;
  })
  val.addEventListener('mousemove', (eve)=>{
    val.childNodes[3].style.left = eve.x + 'px';
  })
})
