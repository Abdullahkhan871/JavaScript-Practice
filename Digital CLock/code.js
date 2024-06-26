// let i = 1;
// const b = setInterval(()=>{

//   console.log(`Abdullah ${i}`)
//   i++;
// },1000)

// setTimeout(()=>{
//   clearInterval(b)
// },5000)



let clock = document.querySelector('.clockBox');
// console.log(data.toLocaleDateString)

setInterval(()=>{
  let data = new Date();
  clock.innerHTML = data.toLocaleTimeString();
},1000)