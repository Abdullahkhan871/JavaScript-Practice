let hit = 0;
let score = 0;
let timerVlv = 0;
onload();
function makeBble(){
  let vlvContainer = '';

  for(let i=0; i<96; i++){ 
    let random = Math.floor(Math.random()*10);
    vlvContainer += `<div class="bble">${random}</div>` 
  };

  document.querySelector('.playArea').innerHTML = vlvContainer; 
};
function timer(){
  timerVlv = 60;

  let timer = setInterval(()=>{

    if(timerVlv > 0){
      timerVlv--;
      document.querySelector('#targetTimer').innerHTML = timerVlv;
    }else{
      clearInterval(timer);
      document.querySelector('.playArea').innerHTML = `<div><h1>Game Over</h1></div>`;
      
      setTimeout(()=>{
        document.querySelector('#score').innerHTML = 0; 
      },2000)

      
    }
  },1000);
};
function newHit(){
  hit = Math.floor(Math.random()*10);
  document.querySelector('#hit').innerHTML = hit;
}
function increaseScore(){
  score += 10; 
  document.querySelector('#score').innerHTML = score; 
}
function decreaseScore(){
  score -= 10; 
  document.querySelector('#score').innerHTML = score; 
}
function result(){

  if(timerVlv > 0){
    // document.querySelector('.playArea').addEventListener('click', onload());    
    // hit = 0;
    document.querySelector('.playArea').addEventListener('click', (dtls)=>{
      bbleNmr = Number(dtls.target.innerText);
      
      if(hit === bbleNmr){
        increaseScore()
        makeBble();
        newHit();
      }else{
        makeBble();
        newHit();
        if(score > 0){
          decreaseScore()
          console.log('ok')
        }
      }
    })
  }    
}
function onload(){
  document.querySelector('#score').innerHTML = 0; 
  makeBble();
  timer();
  newHit();
  result()
}