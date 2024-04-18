let a = prompt('enter a:');
let b = prompt('enter b:');

if(isNaN(a)||isNaN(b)){
  throw SyntaxError("this is not allowesd");
}

let sum = parseInt(a) + parseInt(b);
//alert(sum);

try {
  console.log('the sum is:',sum*x);
  
} catch (error) {
  console.log('error aa gaya bhai');
  
}
