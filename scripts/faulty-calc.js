let rand = Math.random();

let a = prompt('enter first number');
let c = prompt('enter operation number');
let b = prompt('enter second number');

let obj = {
  '+': '-',
  '*': '+',
  '-': '/',
  '/': '**'
}

function calc() {
  if (rand < 0.1) {
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`);
  } else {
    c = obj[c];
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`);
  }
}
calc();

