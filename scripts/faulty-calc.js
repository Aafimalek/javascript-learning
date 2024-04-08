let rand = Math.random();
function calc(a,b){
  if(rand<0.1){
     return a-b; 
  }else{
    return a+b;
  }
}
console.log(calc(10, 15)); 

