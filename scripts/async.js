// async function getData(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       resolve(455);
//     }, 3000);
//   })
// }

async function getData(){
  let x = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  let data = await x.json();
  return data
   
}


async function main(){ 
console.log('modules');
console.log('hello1');
console.log('do something');

let data =  await getData();

console.log(data);
console.log('process data');
console.log('do something after data');
}
main()

// data.then((v)=>{
//   console.log(data);
//   console.log('process data');
  
// })

