do {
  var word = prompt("Inserire una parola");
} while (!word || !isNaN(word));

var palindromWord = isPalindrom(word);

alert(word + " is palindrom ? " + palindromWord);

function isPalindrom(word) {
  var arrayWord = word.split("");
  var arrayReverse = [];

  for (var i = arrayWord.length - 1; i >= 0; i--) {
    arrayReverse.push(arrayWord[i]);
  }

  for (var i = 0; i < arrayWord.length; i++) {
    if (arrayWord[i].toLowerCase() !== arrayReverse[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}
