const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');
const modal = document.getElementById('modal');

// openBtn.addEventListener('click', ()=>{
//     modal.classList.toggle('open');
// });

setTimeout(()=>{
    modal.classList.toggle('open');
},10000)

closeBtn.addEventListener('click', ()=>{
    modal.classList.remove('open');
})


 