let ipt = document.querySelector(`input[type='text']`);
let clickIcon = document.querySelector('#clck');
let temperatur = document.querySelector('.temp');
let cityName = document.querySelector('.city');
let cityName1 = document.querySelector('#city');
let localDate = document.querySelector('.data');
let weatherCondition = document.querySelector('.weatherCondition');
let windSpeed = document.querySelector('.wind-speed');

let city;
let apiKey = `d594e5203816ab170db68f040e5cc611`;

clickIcon.addEventListener('click', () => {
  city = ipt.value;
  if(ipt.value == ''){
    alert('fill the input field first')
  }else{
    collectingData();
    console.log('no')
    ipt.value = '';
  }
});

async function weatherFetch(city) {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    let data = await response.json();
    return data;
}

async function collectingData() {
  let data = await weatherFetch(city);
  let speed = data.wind.speed * 3.6;

  temperatur.innerHTML = data.main.temp.toFixed(2);
  cityName.innerHTML = data.name;
  weatherCondition.innerHTML = data.weather[0].description;
  windSpeed.innerHTML = speed.toFixed(2);

  const date = new Date();
  localDate.innerHTML = date.toDateString(); 
}
