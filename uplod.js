function displayFileSize() {
  var fileInput = document.getElementById("fileInput");

  if (fileInput.files.length > 0) {
    var fileSize = fileInput.files[0].size;
    var fileSizeInKB = fileSize / 1024;

    document.getElementById("fileSize").textContent =
      "Fayl hajmi: " + fileSizeInKB.toFixed(2) + " KB";
  } else {
    document.getElementById("fileSize").textContent = "Fayl tanlangmagan";
  }
}
