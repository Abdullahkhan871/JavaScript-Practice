// let form = document.querySelector('.myForm');

// form.addEventListener('submit', (eve)=>{
//   eve.preventDefault();

//   const cm = document.getElementById('cm');
//   const kg = document.getElementById('kg');
//   let bmi = 0;
//   let cmValue = cm.value;
//   let kgValue = kg.value;
//   let meter = 0;
//   if(cmValue.length > 0 && kgValue.length > 0){
    // meter = cmValue/100;
    // meter *= meter;
    // meter = Number(meter.toFixed(2))
//   }else{
//     console.log('fill')
//   }
  
//   kgValue = Number(kg.value);
//   bmi = kgValue/meter;
//   bmi = parseInt(bmi.toFixed(2))
//   // console.log(bmi)
//   if(bmi <= 18.5){
//     alert(`${bmi}: Underweight`)
//     console.log()
//   }else if(bmi ===18.5 || bmi <=24.9){
//     alert(`${bmi}: Normal Weight`)
//   }else if(bmi === 25 || bmi<=29.9){
//     alert(`${bmi}: Overweight`)
//   }else{
//     alert(`${bmi}: Obesity`)
//   }
// })

// // formula

// // https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wikihow.com%2FCalculate-Your-Body-Mass-Index-%2528BMI%2529&psig=AOvVaw0aM1ysEI5l-CX9XQpeIokV&ust=1717385758083000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMCnq83-u4YDFQAAAAAdAAAAABAE


let form = document.querySelector('.myForm');
let result = document.querySelector('span');
form.addEventListener('submit', (eve) => {
  eve.preventDefault(); 
  const cm = document.getElementById('cm');
  const kg = document.getElementById('kg');
  let cmValue = parseFloat(cm.value);
  let kgValue = parseFloat(kg.value);
  let bmi = 0;
  let meter = 0;
  if (cmValue > 0 && kgValue > 0) {
    meter = cmValue / 100;
    meter = meter * meter; // Correct calculation for meters squared
    bmi = kgValue / meter;
    result.innerHTML = bmi.toFixed(2); // Round the BMI to two decimal places
  } else {
    result.innerHTML = 'Please fill out both fields with valid numbers.'; // Round the BMI to two decimal places
  }
}); 