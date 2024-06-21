let counterDisplayElem = document.querySelector('.counter-display');
let counterPlusElem = document.querySelector('.counter-plus');
let cpm = document.querySelector('.cpm');
let count = 0;
<<<<<<< HEAD
let countCpm = 5//ajouter les multiplicateur ici


//update
=======
let countCpm = 5;//ajouter les multiplicateur ici
let sheenCost = 100;
let phageCost = 300;
let trinityCost = 1000;
let bfswordCost = 10000;
let pickaxeCost = 50000;
let infinityedgeCost = 200000;  
let igniteCost = 1000000;
let exhaustCost = 2000000;
let timer =0;
>>>>>>> Alexis
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

//multiplicateur Sheen

document.getElementById('sheen').addEventListener('click',function(){
    if (count<sheenCost) {
        alert("Not enough $$$! you need $" + sheenCost);
    } else {
        countCpm++;
        count -= sheenCost;
        sheenCost *= 2.0;
        cpm.innerHTML=countCpm;
    }
});

//multiplicateur phage

document.getElementById('phage').addEventListener('click',function(){
    if (count<phageCost) {
        alert("Not enough $$$! you need $" + phageCost);
    } else {
        countCpm+=4;
        count -= phageCost;
        phageCost *= 2.0;
        cpm.innerHTML=countCpm;
    }
});

<<<<<<< HEAD


=======
//multiplicateur Trinity

document.getElementById('trinityforce').addEventListener('click',function(){
    if (count<trinityCost) {
        alert("Not enough $$$! you need $" + trinityCost);
    } else {
        countCpm*=2;
        count -= trinityCost;
        trinityCost *= 2.0;
        cpm.innerHTML=countCpm;
    }
});

//multiplicateur BF Sword

document.getElementById('bfsword').addEventListener('click',function(){
    if (count<bfswordCost) {
        alert("Not enough $$$! you need $" + bfswordCost);
    } else {
        countCpm+=200;
        count -= bfswordCost;
        bfswordCost *= 2.0;
        cpm.innerHTML=countCpm;
    }
});

//multiplicateur Pickaxe
document.getElementById('pickaxe').addEventListener('click',function(){
    if (count<pickaxeCost) {
        alert("Not enough $$$! you need $" + pickaxeCost);
    } else {
        countCpm+=1000;
        count -= pickaxeCost;
        pickaxeCost *= 2.0;
        cpm.innerHTML=countCpm;
    }
});

//multiplicateur InfinityEdge
document.getElementById('infinityedge').addEventListener('click',function(){
    if (count<infinityedgeCost) {
        alert("Not enough $$$! you need $" + infinityedgeCost);
    } else {
        countCpm*=4;
        count -= infinityedgeCost;
        infinityedgeCost *= 2.0;
        cpm.innerHTML=countCpm;
    }
});

//BUFF IGNITE

document.getElementById('ignite').addEventListener('click',function(){
    if (count<igniteCost) {
        alert("Not enough $$$! you need $" + igniteCost);
    } else {
        while (timer <60) {
            countCpm*=4;
            count -= igniteCost;
            igniteCost *= 2.0;
            cpm.innerHTML=countCpm;
            intervalId = setInterval(function (){
                timer += 1;
            },1000)
        }
    }
});
>>>>>>> Alexis
