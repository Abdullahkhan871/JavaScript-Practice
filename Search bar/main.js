let vlv = document.querySelectorAll(`input[type='checkbox']`);
let para = document.querySelector('p');

vlv.forEach(eve =>{
  // console.log(eve)
  eve.addEventListener('change', ()=>{
    // if(eve.va)
    console.log(eve.checked)
    if(eve.checked){
      para.style.textDecoration = 'line-through';
      console.log('yes')
    }else{
      console.log('no')
      para.style.textDecoration = 'line-through';
    }
  })
})