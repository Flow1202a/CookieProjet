let counterDisplayElem = document.querySelector('.counter-display');
let counterPlusElem = document.querySelector('.counter-plus');
let cpm = document.querySelector('.cpm');
let count = 0;
let countCpm = 5//ajouter les multiplicateur ici



updateCounter();
updateCounterCpm();




//clicker
counterPlusElem.addEventListener("click",()=>{
    if(countCpm === 1){
        count++;
    }
    else {
        count +=  countCpm
    }
    updateCounter();
}) ;

//autoClicker
document.getElementById('toggleButton').addEventListener('click', function() {
    var button = document.getElementById('toggleButton');

    if (button.classList.contains('off')) {
        button.classList.remove('off');
        button.classList.add('on');
        button.textContent = 'AUTO : ON';
        button.style.background = 'linear-gradient(73deg, #020022, #1f6b69)';
        button.style.color = 'white';
        button.style.border = '1px solid gold'

        intervalId = setInterval(function (){
            count += countCpm;
            updateCounter();
        },1000)
    } else {
        button.classList.remove('on');
        button.classList.add('off');
        button.textContent = 'AUTO : OFF';

        clearInterval(intervalId);

    }
});

//Fonctions


//update du compteur global
function updateCounter(){
    counterDisplayElem.innerHTML = count;
}
//update du compteur cpm
function updateCounterCpm(){
    cpm.innerHTML = countCpm;
}





