// let body = document.querySelector('body');
// // console.log(body)

// document.querySelector('#pause').addEventListener('click',()=>{
//   body.style.backgroundColor = 'blue';
// })
// document.querySelector('#pause1').addEventListener('click',()=>{
//   body.style.backgroundColor = 'green';
// })
// document.querySelector('#pause2').addEventListener('click',()=>{
//   body.style.backgroundColor = 'yellow';
// })
// document.querySelector('#pause3').addEventListener('click',()=>{
//   body.style.backgroundColor = 'red';
// })



// // Event Delegation

const body = document.querySelector('body');
const parent = document.querySelector('.parent');
    
// parent.addEventListener('click', (event) => {
//   const targetId = event.target.id;
//   switch(targetId) {
//     case 'pause':
//       body.style.backgroundColor = 'blue';
//       break;
//     case 'pause1':
//       body.style.backgroundColor = 'green';
//       break;
//     case 'pause2':
//       body.style.backgroundColor = 'yellow';
//       break;
//     case 'pause3':
//       body.style.backgroundColor = 'red';
//       break;
//     default:
//       break;
//   }
// });

parent.addEventListener('click',(eve)=>{
  console.log(eve)
  if(eve.target.id === 'pause'){
    body.style.backgroundColor = 'blue';
  }else if(eve.target.id === 'pause1'){
    body.style.backgroundColor = 'green';
  }else if(eve.target.id === 'pause2'){
    body.style.backgroundColor = 'yellow';
  }else if(eve.target.id === 'pause3'){
    body.style.backgroundColor = 'red';
  }
})