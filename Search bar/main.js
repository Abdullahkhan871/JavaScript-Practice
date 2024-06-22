/*Searh bar
JavaScript me mene abhi maximum 60-90 hours put kiye hai thnks code thoda ugly hai thanks
*/

let inpt = document.querySelector(`input[type='text']`)
let para = document.querySelectorAll('p');

function paraNone(){
  invlv = inpt.value.toLowerCase();
  console.log(invlv);
  para.forEach(elv => {
    if(elv.innerText.toLowerCase().includes(invlv)){
      elv.style.color = 'red'
    }else{
      elv.style.color = 'black'
      elv.style.display = 'none'
    }
  });
}

inpt.addEventListener('input', ()=>{
  if(inpt.value == ''){
    para.forEach(elv =>{
      elv.style.color = 'black';
      elv.style.display = 'block'
  })
  }else{
    paraNone();
  }
})

