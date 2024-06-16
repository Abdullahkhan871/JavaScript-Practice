let h3 = document.querySelector('h3')
let countShow = document.querySelector('span');
let btn = document.querySelectorAll('button');

let countNumber = 0;
let tikTok;

btn.forEach((eve)=>{
  if(eve.id == 'strt'){
    eve.addEventListener('click',()=>{
      tikTok = setInterval(()=>{
        countShow.innerText = countNumber;
        countNumber++;
      }, 1000)
    })
  }else if(eve.id == 'end'){
    eve.addEventListener('click',()=>{
      clearInterval(tikTok)
    })
  }else if(eve.id == 'rst'){
    eve.addEventListener('click',()=>{
      countShow.innerText = 0;
      clearInterval(tikTok);
      countNumber = 0;
    }) 
  }
})