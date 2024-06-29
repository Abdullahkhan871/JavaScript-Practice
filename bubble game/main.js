// [Violation] 'click' handler took 247ms

onload();

function onload(){
  let playArea = document.querySelector('.playArea');
  fillContainer(playArea);
  timer();
}

function fillContainer(container){
  container.innerHTML = '';
  let random;
  for(let i=0; i< 96; i++){
    random = Math.floor(Math.random() * 10);
    container.innerHTML += `<div class="nmr"><span>${random}</span></div>`
  }
  target(random);
}

function target(random){
  let target = document.querySelector('#target');
  target.innerHTML = random;

  score(random, target)
};

function score(random, target){
  // console.log(random == target.innerHTML)
  let playArea = document.querySelector('.playArea');
  let scoreVlv = document.querySelector('#score');
  
  playArea.addEventListener('click', (eve)=>{
    let vlv = eve.target.innerText;
    if(vlv == target.innerHTML){
      scoreVlv.innerHTML++;
    }
    fillContainer(playArea)
  })
}

function timer(){
  let playArea = document.querySelector('.playArea');
  let targetTimer = document.querySelector('#targetTimer');
  let vlv = 30;
  let ticTok;
  
  if (vlv > 0) {
    ticTok = setInterval(() => {
      targetTimer.innerHTML = vlv;
      vlv--;
      if (vlv < 0) {
        clearInterval(ticTok);
        playArea.innerHTML = `<div class="scoreEnd">Referesh the page</div>`
      }
    }, 1000);
  };
  
}