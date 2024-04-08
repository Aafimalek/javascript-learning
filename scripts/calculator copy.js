let displayValue = '';
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.target);
        displayValue = displayValue + e.target.innerHTML;
        document.querySelector('input').value = displayValue;
    })
})