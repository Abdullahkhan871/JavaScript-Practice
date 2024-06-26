const slide = document.querySelectorAll('img');
const next = document.querySelector('#next');
const prevous = document.querySelector('#prevous');

let count = 0;

slide.forEach((ele, inx)=>{
  ele.style.left = `${inx * 100}%`;
})

next.addEventListener('click',()=>{
 if(slide.length-2 < count){
  console.log('aa'+count)
  count = 0;
  slider();
}
 else{
  console.log(count)
   count++;
   slider();
 }
})

prevous.addEventListener('click',()=>{
  count--;
  slider();
})

function slider(){
  slide.forEach(
    (ele)=>{
      ele.style.transform = `translateX(-${count * 100}%)`
  })
}



// slide.forEach((ele, inx)=>{
//   ele.style.left = `${inx * 100}%`;
// })

// // Function to handle next button click
// function nextSlide() {
//   if (count >= slide.length - 2) {
//     count = 0;
//   } else {
//     count++;
//   }
//   slider();
// }

// // Function to handle previous button click
// function prevSlide() {
//   if (count <= 0) {
//     count = slide.length - 2;
//   } else {
//     count--;
//   }
//   slider();
// }

// // Function to animate the slider
// function slider() {
//   slide.forEach(ele => {
//     ele.style.transform = `translateX(-${count * 100}%)`;
//   });
// }

// // Add event listeners for next and previous buttons
// next.addEventListener('click', nextSlide);
// prevous.addEventListener('click', prevSlide);

// // Automatically advance the slider every 5 seconds
// setInterval(nextSlide, 5000);
