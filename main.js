function countBrackets() {
  var inputValue = document.getElementById("myInput").value;
  var openCount = 0;
  var closeCount = 0;

  for (var i = 0; i < inputValue.length; i++) {
    if (inputValue[i] === "(" || inputValue[i] === "'") {
      openCount++;
    } else if (inputValue[i] === ")" || inputValue[i] === "'") {
      closeCount++;
    }
  }
  var resultText =
    openCount === closeCount
      ? "Jami ochuvchi va yopuvchi qavlar soni teng."
      : "Jami ochuvchi va yopuvchi qavlar soni teng emas.";
  document.getElementById("result").textContent = resultText;
}
