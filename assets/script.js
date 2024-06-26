let counterDisplayElem = document.querySelector('.counter-display');
let counterPlusElem = document.querySelector('.counter-plus');
let cpm = document.querySelector('.cpm');
let count = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;
let countCpm = 5;
let btn = document.querySelector(".counter-plus");
let animationInProgress = false;
let animationId;
let resetScore = document.querySelector(".resetScore");
let sheenCost = 100;
let phageCost = 300;
let trinityCost = 1000;
let bfswordCost = 10000;
let pickaxeCost = 50000;
let infinityedgeCost = 200000;
let igniteCost = 500000;
let exhaustCost = 1000000;
let timer =0;
const champ =document.getElementById("Teemo");
let img=0;
// audio test
let audioTeemo = new Audio("../images/teemo_4.mp3");
//button on/off audio
let buttonSound = document.querySelector('.sound');

buttonSound.addEventListener('click', ()=> {
    if(buttonSound.classList.contains('on')) {
        buttonSound.classList.remove('on');
        buttonSound.classList.add('off')
        buttonSound.innerHTML = 'sound: Off';
        audioTeemo.volume = 0.0;
    }else {
        buttonSound.classList.remove('off');
        buttonSound.classList.add('on')
        buttonSound.innerHTML = 'sound: On';
        audioTeemo.volume = 1;
    }

})

// items Inventory
let sheenInventory = document.querySelector('.sheenInvent');
sheenInventory.innerHTML = 0;
let phageInventory = document.querySelector('.phageInvent');
phageInventory.innerHTML = 0;
let trinityInventory = document.querySelector('.trinityInvent');
trinityInventory.innerHTML = 0;
let bfswordInventory = document.querySelector('.bfswordInvent');
bfswordInventory.innerHTML = 0;
let pickaxeInventory = document.querySelector('.pickaxeInvent');
pickaxeInventory.innerHTML = 0;
let infinityedgeInventory = document.querySelector('.infinityInvent');
infinityedgeInventory.innerHTML = 0;
// show items Cost
let sheenCostShow = document.querySelector('.sheenC');
sheenCostShow.innerHTML = 100;
let phageCostShow = document.querySelector('.phageC');
phageCostShow.innerHTML = 300;
let trinityCostShow = document.querySelector('.trinityC');
trinityCostShow.innerHTML = 1000;
let bfswordCostShow = document.querySelector('.bfswordC');
bfswordCostShow.innerHTML = 10000;
let pickaxeCostShow = document.querySelector('.pickaxeC');
pickaxeCostShow.innerHTML = 50000;
let infinityCostShow = document.querySelector('.infinityC');
infinityCostShow.innerHTML = 200000;
let igniteCostShow = document.querySelector('.igniteC');
igniteCostShow.innerHTML = 1000000;
let exhaustCostShow = document.querySelector('.exhaustC');
exhaustCostShow.innerHTML = 2000000;

//update
updateCounter();
updateCounterCpm();

//clicker
counterPlusElem.addEventListener("click",()=>{
    audioTeemo.play();
    if(countCpm === 1){
        count++;
    }
    else {
        count +=  countCpm
    }
    localStorage.setItem('score',count)
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
btn.addEventListener("click", (e) => {
    const clickEffect = document.querySelector(".click-effect");
    let countSpike = document.getElementById("spikeCount")
    countSpike.innerText = countCpm
    if (animationInProgress) {
        clearTimeout(animationId);
        clickEffect.classList.remove("effect");
        countSpike.classList.remove("remover");
        void clickEffect.offsetWidth;
    }
    countSpike.classList.remove("remover");
    clickEffect.style.top = e.clientY + window.scrollY + "px";
    clickEffect.style.left = e.clientX + window.scrollX + "px";
    countSpike.classList.add("effect");
    clickEffect.classList.add("effect");
    animationInProgress = true;

    animationId = setTimeout(() => {
        clickEffect.classList.remove("effect");
        countSpike.classList.add("remover")
        animationInProgress = false;
    }, 500);
});

resetScore.addEventListener("click", ()=>{
    counterDisplayElem.innerHTML = 0;
    count = 0;
    cpm.innerHTML = 5;
    countCpm = 5
})


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
        sheenCostShow.innerHTML *=2;
        sheenInventory.innerHTML ++;
    }
    updateCounter();
    updateCounterCpm();
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
        phageInventory.innerHTML ++;
        phageCostShow.innerHTML *=2.0;
    }
    updateCounter();
    updateCounterCpm();
});

//multiplicateur Trinity

document.getElementById('trinityforce').addEventListener('click',function(){
    if (count<trinityCost) {
        alert("Not enough $$$! you need $" + trinityCost);
    } else {
        countCpm*=2;
        count -= trinityCost;
        trinityCost *= 2.0;
        cpm.innerHTML=countCpm;
        trinityInventory.innerHTML ++;
        trinityCostShow.innerHTML *=2.0;
    }
    updateCounter();
    updateCounterCpm();
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
        bfswordInventory.innerHTML ++;
        bfswordCostShow.innerHTML *=2.0;
    }
    updateCounter();
    updateCounterCpm();
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
        pickaxeInventory.innerHTML ++;
        pickaxeCostShow.innerHTML *=2.0;
    }
    updateCounter();
    updateCounterCpm();
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
        infinityedgeInventory.innerHTML ++;
        infinityCostShow.innerHTML *=2.0;
    }
    updateCounter();
    updateCounterCpm();
});
//BUFF IGNITE
let countcar= countCpm * countCpm;
document.getElementById('ignite').addEventListener('click',function(){
    if (count<igniteCost) {
        alert("Not enough $$$! you need $" + igniteCost);
    } else {
        countcar;
        count -= igniteCost;
        igniteCost *= 2.0;
        cpm.innerHTML=countCpm;
        intervalId = setInterval(function (){
            timer += 1;
        },1000)
}  
});

//Change Champ;

document.getElementById('swap-champ').addEventListener('click',function () {
    if (img === 0) {
        document.getElementById('Teemo').src = "../images/yuumi.png";
        img +=1;
    } else {
       document.getElementById('Teemo').src = "../images/pngwing.com.png";
       img -=1; 
    }

})
//multiplicateur InfinityEdge
document.getElementById('ignite').addEventListener('click',function(){
    let counterValueBefore = countCpm
    countCpm = countCpm * countCpm
    updateCounterCpm();
    intervalId = setTimeout(function (){
        countCpm = counterValueBefore
        updateCounterCpm();
    },10000)

});

document.getElementById('exhaust').addEventListener('click',function(){
    let counterValueBefore = countCpm
    countCpm = countCpm * countCpm * countCpm * countCpm
    updateCounterCpm();
    intervalId = setTimeout(function (){
        countCpm = counterValueBefore
        updateCounterCpm();
    },5000)

});
