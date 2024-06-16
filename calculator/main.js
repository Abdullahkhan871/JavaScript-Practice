let btn = document.querySelectorAll('.btn');
let input = document.querySelector('#data');


for (const eve of btn) {

  eve.addEventListener('click', (event)=>{
    if(event.target.innerHTML == '='){
      // console.log('ok')
      if(input.value == ''){
        alert('please fill the value');
      }else{
        input.value = eval(input.value);
      }
    }else if(event.target.innerHTML == 'CLR'){
      input.value = '';
    }else if(event.target.innerHTML == 'dlt'){
      input.value = input.value.slice(0, -1);
    }
    else{
      input.value += event.target.innerHTML;
      console.log(event.target.innerHTML)
    }
  })

}