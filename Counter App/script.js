const counterDisplay = document.getElementById("counter");
let count = 0;

let increase = document.getElementById('increase');
let reset = document.getElementById('reset');
let decrease = document.getElementById('decrease');

increase.addEventListener('click', ()=>{
    count++;
    updateCounter();
});

reset.addEventListener('click', ()=>{
    if(count === 0){
        alert("value is already Zero");
    }else{
        count = 0;
        updateCounter();
    }
});

decrease.addEventListener('click', ()=>{
    if(count > 0){
        count--;
        updateCounter();
    }else{
        alert('Value cannot be less than Zero');
    }
})

function updateCounter(){
    counterDisplay.textContent = count;
}