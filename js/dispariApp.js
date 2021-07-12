do {
  var side = prompt("Pari o dispari?");
}while (
  !side.toLowerCase().trim() === "pari" ||
  !side.toLowerCase().trim() === "dispari" ||
  side.toLowerCase().trim() === ""
);

do {
  var number = prompt("Scegli un numero da 1 a 5");
} while ( parseInt(number) > 5 || parseInt(number) < 0 || isNaN(number) || number.toLowerCase().trim() === "");


var max = 5;
var min = 1;

var result = getRandomNumber(max,min);

var sum = result + parseInt(number);


var even = isEven (sum);

if ((even && side === "pari") || (!even && side === "dispari")){
    alert("Hai vinto contro il computer :P")
} else {
    alert("Hai perso contro il computer XD")
}



function getRandomNumber (max,min){
    return Math.floor(Math.random() * (max - min) + min)
}

function isEven(number){
if(number % 2 === 0){
    return true
} return false
}