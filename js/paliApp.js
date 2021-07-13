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

  if (arrayWord.join().toLowerCase() === arrayReverse.join().toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
