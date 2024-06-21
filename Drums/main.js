let btn = document.querySelectorAll('button');
let stp = document.querySelectorAll('#stopSong');

let musicBulk = ['moyemoyeshort.mp3','crash.mp3','snare.mp3', 'tom-1.mp3','tom-4.mp3'];
let song;
btn.forEach((e,y) =>{
    e.addEventListener('click', ()=>{
      if(e.innerText == 'Stop'){
        song.pause();        
      }else{
        // console.log('ok')
        if(song){
          song.pause(); 
        }
        song = new Audio(musicBulk[y])
        song.play();
        }
    });
})


