var btnTranslate = document.querySelector("#btn");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

function clickHandler() {
    outputDiv.innerText=txtInput.value;
};

btnTranslate.addEventListener("click",clickHandler);