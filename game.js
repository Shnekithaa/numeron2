// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let number3 = document.getElementById("number3");
let buttons = document.getElementById("buttons");
buttons.addEventListener('click', checkOperator);
let timer = document.getElementById("timer");

let randomNumber1;
let randomNumber2;
let arr;
let operator;



function displayRandomNumbers(){
    randomNumber1 = generateRandomNumber(1,100);
    randomNumber2 = generateRandomNumber(1,100);
    number1.textContent = randomNumber1;
    number2.textContent = randomNumber2;
    let randomNumber3 = generateRandomNumber3();
    number3.textContent = randomNumber3;
    
}

displayRandomNumbers();

function generateRandomNumber(min,max){
    return Math.ceil(Math.random()*max)+min;
    
}

// Iteration 3: Creating variables required to make the game functional


// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"


function generateRandomNumber3(){
    arr = ["+", "-", "*", "/", "%"];
    let output;
    operator = generateRandomNumber(0, arr.length);
    if(arr[operator] === "+"){
        output = randomNumber1 + randomNumber2;
    }else if(arr[operator] === "-"){
        output = randomNumber1 - randomNumber2;
    }else if(arr[operator] === "*"){
        output = randomNumber1 * randomNumber2;
    }else if(arr[operator] === "/"){
        output = Math.floor(randomNumber1 / randomNumber2);
    }else if(arr[operator] === "%"){
        output = randomNumber1 % randomNumber2;
    }
    return output;
}


// Iteration 5: Creating a randomise function to make the game functional

let score = 0;

function checkOperator(event){
    if(event.target.id == "plus" && arr[operator] == "+"){
        score++;
        displayRandomNumbers();
        time = 20;
    }else if(event.target.id == "minus" && arr[operator] == "-"){
        score++;
        displayRandomNumbers();
        time = 20;
    }else if(event.target.id == "mul" && arr[operator] == "*"){
        score++;
        displayRandomNumbers();
        time = 20;
    }else if(event.target.id == "divide" && arr[operator] == "/"){
        score++;
        displayRandomNumbers();
        time = 20;
    }else if(event.target.id == "modulus" && arr[operator] == "%"){
        score++;
        displayRandomNumbers();
        time = 20;
    }else{
        gameOver();
    }
}

// Iteration 6: Making the Operators (button) functional

setInterval(showTime, 1000);
let time = 20;

function showTime(){
    if(time == 0){
        gameOver();
    }else{
        time--;
        timer.innerText = time;
    }
}

function gameOver(){
    localStorage.setItem("total", score);
    location.href = "gameover.html";
}

// Iteration 7: Making Timer functional
