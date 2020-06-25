function getNumber(number){
    var result = document.getElementById("number");
    result.value += number; 
}
function getEmpty(){
    var empty = document.getElementById("number");
    empty.value = "";
}
function result(){
    var finalResult = document.getElementById("number");
    finalResult.value = eval(finalResult.value);
}