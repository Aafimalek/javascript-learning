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