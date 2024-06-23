let peopleConatainer = document.querySelector('.peopleContainer');
let search = document.querySelector(`input[type='text']`);
let peopleData = [
  {name:'Abdullah', title: 'Graphic Designer', src: 'https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg'},
  {name:'Ravi', title: 'Designer', src: 'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg'},
  {name:'Zubair', title: 'Template Developer', src: 'https://images.pexels.com/photos/977796/pexels-photo-977796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  {name:'Max', title: 'Developer', src: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600'},
  {name:'Siraj', title: 'Chef', src: 'https://images.pexels.com/photos/832998/pexels-photo-832998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  {name:'Sexena', title: 'Teler', src: 'https://images.pexels.com/photos/832998/pexels-photo-832998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  {name:'Malik', title: 'Graphic Designer', src: 'https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  {name:'Khalida', title: 'Housewife', src: 'https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  {name:'Ikhlaq', title: 'Scrap Dealer', src: 'https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg'},
];
let fname;
peopleData.forEach((eve, ind) =>{
  let people = 
  `
    <div class="person">
      <img src="${peopleData[ind].src}" alt="">
      <div class="discription">
        <span class="name">${peopleData[ind].name}</span>
        <p class="title">${peopleData[ind].title}</p>
      </div>
    </div>
  `;
  peopleConatainer.innerHTML += people;
  fname = document.querySelectorAll('.name')
});

search.addEventListener('input', ()=>{
  inp = search.value.toLowerCase();
  fname.forEach(e =>{
    let eve = e.innerHTML.toLowerCase();
    if(eve.includes(inp)){
      if(inp == ''){
        e.parentElement.parentElement.style.display = 'block'
      }      
    }else{
      e.parentElement.parentElement.style.display = 'none'
    }
  })
})

// let input = document.querySelector('input');
// let peopleData = [
//   {name:'Abdullah', title: 'Graphic Designer', src: 'https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg'},
//   {name:'Ravi', title: 'Designer', src: 'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg'},
//   {name:'Zubair', title: 'Template Developer', src: 'https://images.pexels.com/photos/977796/pexels-photo-977796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
//   {name:'Max', title: 'Developer', src: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600'},
//   {name:'Siraj', title: 'Chef', src: 'https://images.pexels.com/photos/832998/pexels-photo-832998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
//   {name:'Sexena', title: 'Teler', src: 'https://images.pexels.com/photos/832998/pexels-photo-832998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
//   {name:'Malik', title: 'Graphic Designer', src: 'https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
//   {name:'Khalida', title: 'Housewife', src: 'https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
//   {name:'Ikhlaq', title: 'Scrap Dealer', src: 'https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg'},
// ];

// let pers = '';
// peopleData.forEach((e,ind)=>{
//   pers+=
//   `
//   <div class="person">
//     <img src="${peopleData[ind].src}" alt="">
//     <div class="discription">
//       <span class="name">${peopleData[ind].name}</span>
//       <p class="title">${peopleData[ind].title}</p>
//     </div>
//   </div>
//   `
// })
// document.querySelector('.peopleContainer').innerHTML += pers;

// input.addEventListener('input', ()=>{
//   let mathing = peopleData.filter(function(e){
//     return e.name.includes(input.value)
//   })
  
//   let users = '';
//   mathing.forEach(e =>{
//     users +=
//     `
//     <div class="person">
//       <img src="${e.src}" alt="">
//       <div class="discription">
//         <span class="name">${e.name}</span>
//         <p class="title">${e.title}</p>
//       </div>
//     </div>
//     `
//   })
//   document.querySelector('.peopleContainer').innerHTML = users;
// })
