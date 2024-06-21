let counterDisplayElem = document.querySelector('.counter-display');
let counterPlusElem = document.querySelector('.counter-plus');
let cpm = document.querySelector('.cpm');
let count = 0;
let countCpm = 5//ajouter les multiplicateur ici


//update
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

//impact click
let btn = document.querySelector(".counter-plus");
let animationInProgress = false;
let animationId;
btn.addEventListener("click", (e) => {
    const clickEffect = document.querySelector(".click-effect");

    if (animationInProgress) {
        clearTimeout(animationId);
        clickEffect.classList.remove("effect");
        void clickEffect.offsetWidth;
    }

    clickEffect.style.top = e.clientY + window.scrollY + "px";
    clickEffect.style.left = e.clientX + window.scrollX + "px";
    clickEffect.classList.add("effect");
    animationInProgress = true;

    animationId = setTimeout(() => {
        clickEffect.classList.remove("effect");
        animationInProgress = false;
    }, 750);
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







