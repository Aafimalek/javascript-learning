// let boxes = document.getElementsByClassName('box');
// console.log(boxes);
// boxes[2].style.backgroundColor ='red';

//document.getElementById('red').style.backgroundColor = 'red';

//document.querySelector('.box').style.backgroundColor = 'green';
// document.querySelectorAll('.box').forEach(e => {
//   e.style.backgroundColor = 'green';
// }); 

let boxes = document.getElementsByClassName('box');


function getRandomColor(){
  let num1 = Math.floor((Math.random()*255));
  let num2 = Math.floor((Math.random()*255));
  let num3 = Math.floor((Math.random()*255));
  return `rgb(${num1} ${num2} ${num3})`;
}

Array.from(boxes).forEach(e=>{
  e.style.backgroundColor = getRandomColor();
  e.style.color = getRandomColor();
});