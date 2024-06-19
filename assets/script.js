let counterDisplayElem = document.querySelector('.counter-display');
let counterPlusElem = document.querySelector('.counter-plus');

let count = 0;

updateDisplay();

counterPlusElem.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};

