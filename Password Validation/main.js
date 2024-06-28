let form = document.querySelector('form');
let wrongInput = document.querySelector('#wrongInput');
let inpt = document.querySelector('#userID'); 
let sbmt = document.querySelector('#sub');
let arr = ['@', '%', '$','#', '.'];


form.addEventListener('submit', (e)=>{
  e.preventDefault();
 
  if(inpt.value == ''){
    wrongInput.innerHTML = 'fill up the form';
  }else{
    vLent(inpt);
    
  }

})

function vLent(inpt){
  let lnt = inpt.value.length;
  let firstLetter = inpt.value[0]
  let check = firstLetter.toUpperCase(); 

  if(lnt <8 || lnt > 15){
    wrongInput.innerHTML = 'Minimum 8 and maximum 15';
  }else if(inpt.value[0] !== check){ 
    wrongInput.style.color = 'red';
    wrongInput.innerHTML = 'first character Should be Capital';
  }else{
    nmrChecking();
    specialCharacter();
  }
}

function nmrChecking(){
  
  let check = inpt.value;
  check = check.replace(/\s+/g, '');

  for(let i=0; i<inpt.value.length; i++){
    let chel = isNaN(check[i]);

    if(chel == false){
      wrongInput.innerHTML = '';
    }else{
      wrongInput.innerHTML = 'include number';
    }
  }
}


function specialCharacter(){
  let check =inpt.value.length;
  let vlv = inpt.value;
  for(let i=0; i < check; i++){
    if(vlv.includes(arr[i])){
      wrongInput.innerHTML = `Don't fill speacial character's. '${arr[i]}'`;
    };
  }
}

// // Abdullah123
// // abdull
// // @abd

