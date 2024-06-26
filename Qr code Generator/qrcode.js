let input = document.querySelector('#qr-input');
let btn = document.getElementById('qr-button');
let qrImg = document.getElementById('qr-img'); 



let inputValidation = ()=>{
  if(input.value == ''){
    alert('plz give the input')
    }
  else{
    let userData = input.value; 
    qrimgValidation(userData)
  }
}


let qrimgValidation = (userData)=>{
  try{
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userData}`;    
  }catch{
    alert('not working');
  }
}

btn.addEventListener('click', inputValidation);