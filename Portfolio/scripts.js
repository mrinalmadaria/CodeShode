let htmlProgress = document.querySelector(".html-css");
let htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0, htmlEndValue = 90, htmlSpeed = 30;

let progressHtml = setInterval(()=>{
    htmlStartValue++;

    htmlValue.textContent = `${htmlStartValue}%`;
    htmlProgress.style.background = `conic-gradient(#fca61f ${htmlStartValue * 3.6}deg, #ededed 0deg)`;

    if(htmlStartValue == htmlEndValue){
        clearInterval(progressHtml);
    }
},htmlSpeed);


// Javascript progress
let JsProgress = document.querySelector(".javascript"), JsValue = document.querySelector(".javascript-progress");

let JsStartValue = 0, JsEndValue = 75, JsSpeed = 50;

let progressJs = setInterval(()=>{
    JsStartValue++;

    JsValue.textContent = `${JsStartValue}%`;
    JsProgress.style.background = `conic-gradient(#fca61f ${JsStartValue * 3.6}deg, #ededed 0deg)`;

    if(JsStartValue == JsEndValue){
        clearInterval(progressJs);
    }
},JsSpeed);

// PHP progress
let PhpProgress = document.querySelector(".php"), PhpValue = document.querySelector(".php-progress");

let PhpStartValue = 0, PhpEndValue = 37, PhpSpeed = 30;

let progressPhp = setInterval(()=>{
    PhpStartValue++;

    PhpValue.textContent = `${PhpStartValue}%`;
    PhpProgress.style.background = `conic-gradient(#fca61f ${PhpStartValue * 3.6}deg, #ededed 0deg)`;

    if(PhpStartValue == PhpEndValue){
        clearInterval(progressPhp);
    }
},PhpSpeed);

// ReactJS progress
let ReactProgress = document.querySelector(".reactjs"), ReactValue = document.querySelector(".reactjs-progress");

let ReactStartValue = 0, ReactEndValue = 55, ReactSpeed = 30;

let progressReact = setInterval(()=>{
    ReactStartValue++;

    ReactValue.textContent = `${ReactStartValue}%`;
    ReactProgress.style.background = `conic-gradient(#fca61f ${ReactStartValue * 3.6}deg, #ededed 0deg)`;

    if(ReactStartValue == ReactEndValue){
        clearInterval(progressReact);
    }
},ReactSpeed);

// Filter funtion
$(document).ready(function(){
    $(".filter-item").click(function(){
        const value = $(this).attr("data-filter");
        if(value == "all"){
            $(".post").show("1000");
        }else{
            $(".post")
                .not("." + value)
                .hide("1000");
            $(".post")
                .filter("." + value)
                .show("1000")
        }
    });
});

// Home button capture and function
let myButton = document.getElementById("btn-back-to-top");

window.onscroll = function(){
    scrollFunction();
};

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        myButton.style.display = "block";
    }else{
        myButton.style.display = "none";
    }
}

myButton.addEventListener("click", function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})