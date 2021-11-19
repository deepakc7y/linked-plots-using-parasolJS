async function fetchCSV(file) {

    var fileInput = file;
    var filePath = fileInput.value;
    var allowedExtensions = /(\.csv)$/i;

    if (!allowedExtensions.exec(filePath)) {
      alert("Invalid file type\nUpload only csv file");
      fileInput.value = "";
      return false;
    }

    var reader = new FileReader();
    reader.onload = function() {
      var data = d3.csvParse(reader.result);
      return data;
    };
    reader.readAsText(fileInput.files[0]);
  }