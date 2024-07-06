let form = document.querySelector('form');
let title= document.querySelector('#title');
let disc = document.querySelector('#discription');

let titleVlv;
let dicsVlv;

form.addEventListener('submit', (eve)=>{
  eve.preventDefault();

  titleVlv = title.value; 
  dicsVlv = disc.value; 

  if(disc.value == '' || title.value == ''){
    console.log('fill the value');
  }else{
    listCreat();
  }
})

function listCreat(){

  newItem = document.createElement('div');
  newItem.classList.add('list');
  let nmr = document.querySelector('.container').childElementCount;

  newItem.innerHTML= 
  `
    <h2 class="title">${titleVlv}</h2>
    <p>${dicsVlv}</p>
    <div class="fe">
      <input type="checkbox" id="cmpl">
      <span id="sts">Pending</span>
      <button class="edt">Edit</button>
      <button class="dlt">Delete</button>
    </div> 
  `;

  // document.querySelector('.filter').innerHTML =  `

  //   <button id="cataloque">All</button>
  //   <button id="cataloque">Pending</button>
  //   <button id="cataloque">Complete</button>

  // `;

  document.querySelector('.container').appendChild(newItem);

  newItem.querySelector('.edt').addEventListener('click', (eve)=>{
    title.value = titleVlv;
    disc.value = dicsVlv;  
    eve.target.parentElement.parentElement.remove();
    console.log(nmr)
  });

  newItem.querySelector('.dlt').addEventListener('click', (eve)=>{
    eve.target.parentElement.parentElement.remove();
  });

  newItem.querySelector('#cmpl').addEventListener('change', (eve)=>{
    eve.preventDefault();

    let chk = eve.target;

    if(chk.checked == true){
      newItem.querySelector('#sts').innerHTML = 'Completed';
    }else if(chk.checked == false){
      newItem.querySelector('#sts').innerHTML = 'Pending';
    }

  });

  title.value = '' ;
  disc.value = '' ;

  setItem(newItem);
};


// function edt(eve){
//   title.value = titleVlv;
//   disc.value = dicsVlv;  
// eve.target.parentElement.parentElement.remove();
// }

// function dlt(eve){
//   eve.parentElement.parentElement.remove();
// }

 
