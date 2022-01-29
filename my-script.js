console.log("------------------------------------------------------------------\nHello MANA, this is frontendmasters project calculator version 1.0\n------------------------------------------------------------------");

let display = document.querySelector('.screen');
let buttons = document.querySelector('.calc-btns');

let memoryForPreviousNumber = null;
let operationSign = "";

buttons.addEventListener('click', function(event){
    if (event.target.classList[2] === "number") {
        display.innerHTML = showAddedNumber(display.innerHTML, event.target.innerHTML);
    }else if(event.target.id === "delete-all"){
        deleteAll();
    }else if(event.target.id === "delete-last"){
        display.innerHTML = deleteLast(display.innerHTML);
    }else if(event.target.id === "equal"){
        display.innerHTML = showResult(display.innerHTML);
    }else {
        if(operationSign !== "" && operationSign !== event.target.id){
            commitOperation(display.innerHTML);
            display.innerHTML = "0";
            operationSign = event.target.id;
        }else {
            operationSign = event.target.id;
            commitOperation(display.innerHTML);
            display.innerHTML = "0";
        }
    }
});

function showAddedNumber(currentNumber, newNumber){
        if(currentNumber === "0"){
            currentNumber = newNumber;           
        }else {
            currentNumber += newNumber;
        }
        return currentNumber;
}

function deleteAll(){
    display.innerHTML = "0";
    memoryForPreviousNumber = null;
    operationSign = "";
}

function deleteLast(numberAsString){
    if(numberAsString!== "0") {
        if(numberAsString.length === 1){
            numberAsString = "0";
        }else {
            numberAsString = numberAsString.slice(0,(numberAsString.length - 1));
        }
    }
    return numberAsString;
}

function add(numberAsString){
    if(memoryForPreviousNumber === null){
        memoryForPreviousNumber = parseInt(numberAsString);
    }else{
        memoryForPreviousNumber = Math.floor(memoryForPreviousNumber) + parseInt(numberAsString);
    }
    operationSign = add.name;
}

function multiply(numberAsString){
    if(memoryForPreviousNumber === null){
        memoryForPreviousNumber = parseInt(numberAsString);
    }else{
        memoryForPreviousNumber = Math.floor(memoryForPreviousNumber) * parseInt(numberAsString);
    }
    operationSign = multiply.name;
}

function devide(numberAsString){
    if(memoryForPreviousNumber === null){
        memoryForPreviousNumber = parseInt(numberAsString);
    }else {
        memoryForPreviousNumber = Math.floor(memoryForPreviousNumber) / parseInt(numberAsString);
    }
    operationSign = devide.name;
}

function reduce(numberAsString){
    if(memoryForPreviousNumber === null){
        memoryForPreviousNumber = parseInt(numberAsString);
    } else {
        memoryForPreviousNumber = Math.floor(memoryForPreviousNumber) - parseInt(numberAsString);
    }
    operationSign = reduce.name;
}

function commitOperation(numberAsString){
    switch(operationSign){
        case "add":
            add(numberAsString);
            break;
        case "multiply":
            multiply(numberAsString);
            break;
        case "devide":
            devide(numberAsString);
            break;
        case "reduce":
            reduce(numberAsString);
            break;
        default:
            memoryForPreviousNumber = parseInt(numberAsString);
            break;
    }
}

function showResult(numberAsString){
    commitOperation(numberAsString);
    let result = memoryForPreviousNumber;
    memoryForPreviousNumber = null;
    operationSign = "";
    return result;
}