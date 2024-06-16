let h3 = document.querySelector('h3');
let count = document.querySelector('span');
let inp = document.querySelector('#txt');


// console.log('inp')

function count1(){
  count.textContent = inp.value.trim().length;
}

inp.addEventListener('input', count1)
