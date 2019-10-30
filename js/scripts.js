function translate(str) {
  if (["a", "e", "i", "o", "u"].indexOf(str[0]) > -1) {
    return str = str + "way";
  } else {
    for (var i = 0; i < str.length; i++) {
      if (["a", "e", "i", "o", "u"].indexOf(str[i]) > -1) {
        var firstConsonant = str.slice(0, i);
        var middle = str.slice(i, str.length);
        str = middle + firstConsonant + "ay";
        break;
      }
    }
    return str;
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
