function checkWord() {
  var textareaValue = document.getElementById("myTextarea").value;
  var inputValue = document.getElementById("myInput").value;

  var words = textareaValue.split(" ");

  var wordExists = false;
  for (var i = 0; i < words.length; i++) {
    if (words[i] === inputValue) {
      wordExists = true;
      break;
    }
  }

  var resultText = wordExists
    ? "Bu so'z matnda mavjud."
    : "Bu so'z matnda mavjud emas.";
  alert(resultText);
}

document.getElementById("myInput").addEventListener("keyup", function () {
  checkWord();
});
