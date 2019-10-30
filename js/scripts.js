// For words beginning with a vowel, this will add "way" to the end.
var vowels = ["a", "e", "i", "o", "u", ,"y", "A", "E", "I", "O", "U", "Y"];
// var consonants = ["b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "u", "w", "x", "y", "z"];

function translate(word) {
  console.log("Word", word);
  if (vowels.indexOf(word[0]) > -1) {
    return word = word + "way";
  } else {
  // For words beginning with one or more consonants, this will move all of the first consecutive consonants to the end, and add "ay".
    for (var i = 0; i < word.length; i++) {
      if (vowels.indexOf(word[i]) > -1) {
        console.log(word[i]);
        var consonantStart = word.slice(0, i);
        var wordRemains = word.slice(i, word.length);
        word = wordRemains + consonantStart + "ay";
        break;
      }
    } if (word[0] == 'q' && word[1] == 'u') {
      console.log("qu yes");
      var rule3 = word.slice(1, i);
      console.log(rule3);
    }
    return word;
  }
}


$(document).ready(function() {
  $("form#translator").submit(function(event) {
    event.preventDefault();
    var translation = translate($("input#userInput").val());

    $("#translationResult").text(translation);
    $("#result").show();
  });
});

//Things we are missing:
// 1. If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first.
//2. The way and ay rule should apply to all inputted words, not just the first one.
