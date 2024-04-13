let button = document.getElementById('btn');

button.addEventListener('dblclick',()=>{
  document.querySelector('.box').innerHTML = "<b> yay I was 2ble clicked</b>";
});


button.addEventListener('click',()=>{
  document.querySelector('.box').innerHTML = "<b> yay I was clicked</b>";
});

document.addEventListener('keydown',(e)=>{
  console.log(e.key);
});


button.addEventListener('contextmenu',()=>{
  alert("dont hack us");
});


console.log("hey1");
console.log('hey2');

setTimeout(() => {
  console.log('timeout');
}, 2000);

setTimeout(() => {
  console.log('timeout2');
}, 2000);

console.log('hey3');
const fn = () => {
  console.log('nothing');
}

const callback = (arg) => {
  console.log(arg);
  fn()
}


const loadScript = (src,callback) => {
  let sc = document.createElement('script');
  sc.src = src;
  sc.onload= callback('aafi',fn);
  document.head.append(sc);
  
}

loadScript("https://www.youtube.com/watch?v=9JaDBYPmiJ0&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&index=75", callback);

console.log('hey');
let prom1 = new Promise((resolve,reject)=>{
  let a = Math.random();
  if(a<0.5){
    reject("random no. is not supporting you")
  }else{
  setTimeout(() => {
    console.log('yes i am done');
    resolve('aafi');
    
  }, 3000);}
});

let prom2 = new Promise((resolve,reject)=>{
  let a = Math.random();
  if(a<0.5){
    reject("random no. is not supporting you2")
  }else{
  setTimeout(() => {
    console.log('yes i am done2');
    resolve('aafi2');
    
  }, 1000);}
});



const p3 = Promise.all([prom1,prom2]);
p3.then((a) => {
  console.log(a); 
}).catch((err)=>{
  console.log(err); 
});

