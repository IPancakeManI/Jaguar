let num1 = Number(document.getElementById("first_cost"))
let num2 = Number(document.getElementById("second_cost"))
let sum = num1 + num2

const btn = document.getElementById("btn")
const container = document.getElementById("result")


function pushAnswers(){
    container.textContent = "";
    
    container.insertAdjacentHTML("beforeend", sum);
}

// document.getElementById("result").insertAdjacentHTML("beforeend", sum);

btn.addEventListener('click', function(){

    num1 = Number(document.getElementById("first_cost"))
    num2 = Number(document.getElementById("second_cost"))
    sum = num1 + num2

    container.textContent = "";
    
    container.insertAdjacentHTML("beforeend", sum);

});
